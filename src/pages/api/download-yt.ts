import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  description: string;
  formatFound: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.v) {
    const url = `http://www.youtube.com/watch?v=${req.query.v}`;
    ytdl.getBasicInfo(url).then((value) => {
      const name = `${value.videoDetails.title}`;
      ytdl.getInfo(req.query.v as string).then((info) => {
        let selectedFormat: ytdl.videoFormat = info.formats.filter(
          (format) => format.qualityLabel.includes("720") && format.hasAudio
        )[0];

        ytdl(url, {
          format: selectedFormat,
        })
          .pipe(fs.createWriteStream(`./public/${name}.mp4`))
          .on("finish", () => {
            res.status(200).json({
              description: `file created with name=> ${name}`,
              formatFound: selectedFormat.qualityLabel,
            });
          });
      });
    });
  }
};
