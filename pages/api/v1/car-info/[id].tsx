import { CarInfo } from "database/entity/carinfo";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const carInfo = await CarInfo.findOne({ where: { id } ,  //attributes: [
        // "veichle_name",
        //  "chasis_no",
        //  "engine_no",
        //  "model_year",
        // "exporter_name",
       // "from"
      //],
      
    });
    if (carInfo === null)
      return res.status(200).json({ message: "Not Found This CarInfo Field" });
    return res.status(200).json(carInfo);
  } else if (req.method === "DELETE") {
    const carInfo = await CarInfo.findOne({ where: { id } });
    if (carInfo === null)
      return res.status(200).json({ Message: "Not Found This CarInfo Field" });
      carInfo.destroy();
    return res.status(200).json({ Message: "Succesfully Deleted" });
  }
  if (req.method === "PATCH") {
    const carInfo = await CarInfo.update(
      
        req.body

      ,
      {
        where: {id: id },
      }
    );
    
    return res.status(200).json({Message:"Successfully Updated"});
  }
}
