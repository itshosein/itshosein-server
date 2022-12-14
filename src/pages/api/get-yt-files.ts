import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  files: string[];
};

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const testFolder = "./public/yt/";
  const files: string[] = fs.readdirSync(testFolder);
  res.status(200).json({
    files: files,
  });
};
