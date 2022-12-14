import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let forwarded = req.headers["x-forwarded-for"];
  if (Array.isArray(forwarded)) {
    forwarded = forwarded.join("");
  }
  const ip = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress;
  fs.appendFile(
    "./ip.text",
    `${ip}\t${new Date().toISOString()}\t${req.query.u}\n`,
    (e) => {
      if (e) {
        console.log(e);
      }
    }
  );
};
