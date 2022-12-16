import type { NextApiRequest, NextApiResponse } from "next";
import { IYoutubeListItem } from "pages/youtube-search";
import * as yt from "youtube-search-without-api-key";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let videos: IYoutubeListItem[] = await yt.search(`${req.query.q}`);
  if (videos?.length) {
    res.status(200).json(videos);
  } else {
    res.status(500).json({
      error: "some error happened",
    });
  }
};
