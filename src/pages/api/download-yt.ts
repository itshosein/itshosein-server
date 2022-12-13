import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";
import fs from "fs";

type Data = {
  description: string;
  name?: string;
  formatFound?: string;
  err?: Error;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
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
              try {
                const data = fs.readFileSync(`./public/yt/${name}.mp4`);
                res.send(data);
                res.status(200).json({
                  description: "file created successfully",
                  name: name,
                  formatFound: selectedFormat.qualityLabel,
                });
              } catch (error) {
                console.error(error);
                res.status(500).json({
                  description: "file NOT created",
                  name: name,
                  formatFound: selectedFormat.qualityLabel,
                  error,
                });
              }
            })
            .on("error", (err) => {
              res.status(500).json({
                description: "file NOT created",
                name: name,
                formatFound: selectedFormat.qualityLabel,
                err,
              });
            });
        });
      })
      .catch((err) => {
        res.status(500).json({
          description: "file NOT created",
          err,
        });
      });
  }
};
