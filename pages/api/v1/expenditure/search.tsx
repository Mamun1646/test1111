import { ExpenditureV1 } from "database/entity/expenditure/expenditureV1";
import { NextApiRequest, NextApiResponse } from "next";
const { Op } = require("sequelize");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { keyword, DateKeyword } = req.query;
  const page = Number(req.query.page);

  if (req.method === "GET") {
 //blocking unwanted condition
    if(keyword==="" && DateKeyword){
    keyword="lkdjsfhksjf"}
    const limit = 10;
    const expenditureLenngth = await ExpenditureV1.findAll({
      attributes: [  "id","date", "title", "value"],
      order: [["updatedAt", "DESC"]],
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
    const expenditure = await ExpenditureV1.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      subQuery: false,
      attributes: [ "id","date", "title", "value"],
      order: [["updatedAt", "DESC"]],
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
    const totalRecord = expenditureLenngth.length;
    console.log(totalRecord);
    return res.status(200).json({ expenditure, totalRecord });
  }
}
