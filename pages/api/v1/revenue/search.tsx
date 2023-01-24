import { NextApiRequest, NextApiResponse } from "next";
const { Op } = require("sequelize");
import { RevenueV1 } from "database/entity/revenue/revenueV1";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { keyword, DateKeyword } = req.query;
  const page = Number(req.query.page);

  if (req.method === "GET") {
    //blocking unwanted condition
    if (keyword === "" && DateKeyword) {
      keyword = "lkdjsfhksjf";
    }
    const limit = 10;
    const RevenueLenngth = await RevenueV1.findAll({
      attributes: [  "id","date", "title", "value"],
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            date: DateKeyword,
          },
        ],
      },
    });
    const revenue = await RevenueV1.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      subQuery: false,
      attributes: ["id","date", "title", "value" ],
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            date: DateKeyword,
          },
        ],
      },
    });
    const totalRecord = RevenueLenngth.length;
   
    return res.status(200).json({ revenue, totalRecord });
  }
}
