import type { NextApiRequest, NextApiResponse } from "next";
import { IYoutubeListItem } from "pages/youtube-search";
import * as yt from "youtube-search-without-api-key";
import fs from "fs"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let videos: IYoutubeListItem[] = await yt.search(`${req.query.q}`);
  if (videos?.length) {
    let thumbnailB64List: string[] = []
    for (const video of videos) {
      const response = await fetch(video.snippet.thumbnails.default.url);
      const data = await response.arrayBuffer();
      const type = response.headers.get("content-type")?.split("/")[1];
      const b64 = Buffer.from(data).toString('base64');
      fs.appendFileSync(`./public/yt/thumbnails/${video.title}.text`, b64)
      // console.log(b64.substring(0, 10));
      thumbnailB64List.push(`${video.title}.${type}`);
    }
    console.log(thumbnailB64List);
    videos = videos.map((video, index) => {
      return {
        ...video,
        snippet: {
          ...video.snippet,
          thumbnails: {
            ...video.snippet.thumbnails,
            default: {
              ...video.snippet.thumbnails.default,
              url: thumbnailB64List[index]
            }
          }
        }
      }
    })
    res.status(200).json(videos);
  } else {
    res.status(500).json({
      error: "some error happened",
    });
  }
};
