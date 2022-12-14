import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  files: string[];
  ip?: string;
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let forwarded = req.headers["x-forwarded-for"];
  if (Array.isArray(forwarded)) {
    forwarded = forwarded.join("");
  }
  const ip = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  fs.appendFile("./ip.text", `${ip}\n`, (e) => {
    if (e) {
      console.log(e);
    }
  });
  const testFolder = "./public/yt/";
  const files: string[] = fs.readdirSync(testFolder);
  res.status(200).json({
    files: files,
    ip: ip,
  });
};
