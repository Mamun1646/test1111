import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";
import { RevenueV1 } from "database/entity/revenue/revenueV1";
interface SingleRevenue {
  date: string | Date;
  uid: string;
  title: string | number;
  value: number;
  status:string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const limit = Number(req.query.limit);
  const page = Number(req.query.page);

  if (req.method === "GET") {
    const totalRecord = await RevenueV1.count();

    const revenue = await RevenueV1.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      subQuery: false,
      order: [["updatedAt", "DESC"]],
      attributes: [  "id","date", "title", "value"],
    });

    return res.status(200).json({ revenue, totalRecord });
  } else if (req.method === "POST") {
    try {
      //Direct body Value will be created
      //const revenue = await Revenue.create(req.body);

      //recieve input from user
      const revenue = req.body;
      //create user input keys array
      let key = Object.keys(revenue);
      //create user values array
      let value: number[] = Object.values(revenue);
      //now create array from Revenue request body object
      const dayWiseRevenue: any[] = [];
      //first divide this larger object into small single revenue object
      let singleRevenue: SingleRevenue = {
        date: req.body.date,
        uid: "",
        title: "",
        value: 0,
        status:"active"
      };
      const uniqueId = uuidv4();
      //create single revenue object and push into the array
      key.map((v, index) => {
        if (index % 2) {
          singleRevenue = {
            date: req.body.date,
            uid: uniqueId,
            title: value[index - 1],
            value: value[index],
            status:"active"
          };

          if (singleRevenue.title !== "") dayWiseRevenue.push(singleRevenue);
        }
      });

      ///duplicate element check
      const total_len = dayWiseRevenue.length;

      let titleSet = new Set();
      dayWiseRevenue.map((singleR) => titleSet.add(singleR.title));
      const unique_len = titleSet.size;

      if (unique_len === total_len &&total_len!==0) {
        const response = await RevenueV1.bulkCreate(dayWiseRevenue);
        return res.status(200).json({Message:"false"});
      } else res.status(200).json({ Message: "true"});
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
