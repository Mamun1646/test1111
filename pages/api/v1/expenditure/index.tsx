import { v4 as uuidv4 } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";
import { Expenditure } from "database/entity/expenditure";
import { ExpenditureV1 } from "database/entity/expenditure/expenditureV1";
interface SingleExpenditure {
  date: string | Date;
  uid: string;
  title: string | number;
  value: number;
  status:string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const limit = Number(req.query.limit);
  const page = Number(req.query.page);

  
  if (req.method === "GET") {
    const totalRecord = await ExpenditureV1.count();

    const expenditure = await ExpenditureV1.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      subQuery: false,
      attributes: [  "id","date", "title", "value"],
      order: [["updatedAt", "DESC"]]
    });

    return res.status(200).json({ expenditure, totalRecord });
  } else if (req.method === "POST") {
    try {
      //Direct body Value will be created
      //const expenditure = await expenditure.create(req.body);

      //recieve input from user
      const expenditure = req.body;
      //create user input keys array
      let key = Object.keys(expenditure);
      //create user values array
      let value: number[] = Object.values(expenditure);
      //now create array from Expenditure request body object
      const dayWiseExpenditure: any[] = [];
      //first divide this larger object into small single expenditure object
      let singleExpenditure: SingleExpenditure = {
        date: req.body.date,
        uid: "",
        title: "",
        value: 0,
        status:""
      };
      const uniqueId = uuidv4();
      //create single expenditure object and push into the array
      key.map((v, index) => {
        if (index % 2) {
          singleExpenditure = {
            date: req.body.date,
            uid: uniqueId,
            title: value[index - 1],
            value: value[index],
            status:"active"
          };

          if (singleExpenditure.title !== "") dayWiseExpenditure.push(singleExpenditure);
        }
      });

      ///duplicate element check
      const total_len = dayWiseExpenditure.length;

      let titleSet = new Set();
      dayWiseExpenditure.map((singleR) => titleSet.add(singleR.title));
      const unique_len = titleSet.size;

      if (unique_len === total_len &&total_len!==0) {
        const response = await ExpenditureV1.bulkCreate(dayWiseExpenditure);
        return res.status(200).json({Message:"false"});
      } else res.status(200).json({ Message: "true"});
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
