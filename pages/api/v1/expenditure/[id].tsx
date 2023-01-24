import { ExpenditureV1 } from "database/entity/expenditure/expenditureV1";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const expenditure = await ExpenditureV1.findOne({ where: { id } , attributes: ["date", "title", "value", "id"],});
    if (expenditure === null)
      return res.status(200).json({ message: "Not Found This Expenditure Field" });
    return res.status(200).json(expenditure);
  } else if (req.method === "DELETE") {
    const expenditure = await ExpenditureV1.findOne({ where: { id } });
    if (expenditure === null)
      return res.status(200).json({ Message: "Not Found This Expenditure Field" });
      expenditure.destroy();
    return res.status(200).json({ Message: "Succesfully Deleted" });
  }
  if (req.method === "PATCH") {
    const expenditure = await ExpenditureV1.update(
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
