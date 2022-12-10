import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  description: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.v) {
    const url = `http://www.youtube.com/watch?v=${req.query.v}`;
    ytdl.getBasicInfo(url).then((value) => {
      const name = `${value.videoDetails.title}`;
      ytdl(url, {
        quality: 247,
      })
        .pipe(fs.createWriteStream(`./public/${name}.mp4`))
        .on("finish", () => {
          res
            .status(200)
            .json({ description: `file created with name=> ${name}` });
        });
    });
  }
};
