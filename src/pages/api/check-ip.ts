import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  fs.appendFile(
    "./ip.text",
    `${req.query.ip}\t${new Date().toISOString()}\t${req.query.u}\n`,
    (e) => {
      if (e) {
        console.log(e);
      }
    }
  );
};
