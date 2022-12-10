import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  ytdl("https://pornhub.com/view_video.php?viewkey=ph636b4d6142af4").pipe(
    fs.createWriteStream("video.mp4")
  );
};
