import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as yt from "youtube-search-without-api-key";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const videos = await yt.search("Hallo Welt");
  console.log("Videos:");
  console.log(videos);
};
