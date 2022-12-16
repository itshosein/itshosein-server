import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.url && typeof req.query.url == "string") {
    const response = await fetch(req.query.url);
    const data = await response.arrayBuffer();
    const b64 = Buffer.from(data).toString('base64');
    res.status(200).json({
      fileB64: b64,
    });
  } else {
    res.status(200).json({
      error: "url not found",
    });
  }
};
