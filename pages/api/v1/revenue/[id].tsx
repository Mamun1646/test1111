import { NextApiRequest, NextApiResponse } from "next";
import { Revenue } from "database/entity/revenue";
import { RevenueV1 } from "database/entity/revenue/revenueV1";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const revenue = await RevenueV1.findOne({ where: { id } , attributes: ["date", "title", "value", "id"],});
    if (revenue === null)
      return res.status(200).json({ message: "Not Found This Revenue Field" });
    return res.status(200).json(revenue);
  } else if (req.method === "DELETE") {
    const revenue = await RevenueV1.findOne({ where: { id } });
    if (revenue === null)
      return res.status(200).json({ Message: "Not Found This Revenue Field" });
    revenue.destroy();
    return res.status(200).json({ Message: "Succesfully Deleted" });
  }
  if (req.method === "PATCH") {
    const revenue = await RevenueV1.update(
      {
        date:req.body.date,
        title:req.body.title,
        value:req.body.value

      },
      {
        where: {id: id },
      }
    );
    
    return res.status(200).json({Message:"Successfully Updated"});
  }
}
