import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import search, { YouTubeSearchOptions } from "youtube-search";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method == "OPTIONS") {
    res.setHeader("Allow", "GET");
    return res.status(202).json({});
  }
  const opts: YouTubeSearchOptions = {
    maxResults: 1000,
    key: "AIzaSyCStRbDC_cbmNPp_69JjYXfwVnJ2M35XJE",
  };
  search(`${req.query.q}`, opts, function (err, results) {
    if (err) return console.log(err);

    if (results?.length) {
      res.status(200).json(results);
    } else {
      res.status(500).json({
        error: "some error happened",
      });
    }
  });
};
