import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  description: string;
  formatFound?: string;
  err?: Error;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.v) {
    const url = `http://www.youtube.com/watch?v=${req.query.v}`;
    ytdl
      .getBasicInfo(url)
      .then((value) => {
        const name = `${value.videoDetails.title}`;
        ytdl.getInfo(req.query.v as string).then((info) => {
          let videoFormats = ytdl.filterFormats(info.formats, "videoandaudio");

          let selectedFormat: ytdl.videoFormat = videoFormats.filter((format) =>
            format.qualityLabel.includes("720")
          )[0];

          ytdl(url, {
            format: selectedFormat,
          })
            .pipe(fs.createWriteStream(`./public/yt/${name}.mp4`))
            .on("finish", () => {
              res.status(200).json({
                description: `file created with name=> ${name}`,
                formatFound: selectedFormat.qualityLabel,
              });
            })
            .on("error", (err) => {
              res.status(500).json({
                description: `file not created with name=> ${name}`,
                formatFound: selectedFormat.qualityLabel,
                err,
              });
            });
        });
      })
      .catch((err) => {
        res.status(500).json({
          description: `file not created with name=> ${name}`,
          err,
        });
      });
  }
};
