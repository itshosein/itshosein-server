import type { NextApiRequest, NextApiResponse } from "next";
import * as yt from "youtube-search-without-api-key";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const videos = await yt.search(`${req.query.q}`);
  if (videos?.length) {
    res.status(200).json(videos);
  } else {
    res.status(500).json({
      error: "some error happened",
    });
  }
};
