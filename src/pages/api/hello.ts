import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  name: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
    fs.createWriteStream("video.mp4")
  );
};
