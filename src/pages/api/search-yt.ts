import type { NextApiRequest, NextApiResponse } from "next";
import { IYoutubeListItem } from "pages/youtube-search";
import * as yt from "youtube-search-without-api-key";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let videos: IYoutubeListItem[] = await yt.search(`${req.query.q}`);
  if (videos?.length) {
    let thumbnailB64List: string[] = []
    videos.forEach(async (video) => {
      const response = await fetch(video.snippet.thumbnails.default.url);
      const data = await response.arrayBuffer();
      const b64 = Buffer.from(data).toString('base64');
      thumbnailB64List.push(b64);
    })
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
