import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.url && typeof req.query.url == "string") {
    const uriDecoded = decodeURIComponent(req.query.url);
    const response = await fetch(uriDecoded);
    const type = response.headers.get("content-type");
    const data = await response.arrayBuffer();
    const b64 = Buffer.from(data).toString('base64');
    res.status(200).json({
      fileB64: `data:${type};base64, ${b64}`,
    });
  } else {
    res.status(200).json({
      error: "url not found",
    });
  }
};
