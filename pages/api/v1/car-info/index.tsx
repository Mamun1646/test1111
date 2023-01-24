import { NextApiRequest, NextApiResponse } from "next";
import { CarInfo } from "database/entity/carinfo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const limit = Number(req.query.limit);
  const page = Number(req.query.page);
  if (req.method === "GET") {
    const totalRecord = await CarInfo.count();

    const carInfo = await CarInfo.findAll({
      offset: (page - 1) * limit,
      limit: limit,
      subQuery: false,
      attributes: [
        "id",
        "from",
        "veichle_name",
         "chasis_no",
         
         "engine_no",
       
         "model_year",
        "exporter_name",
       // "from"
      
      ],
      order: [["updatedAt", "DESC"]],
    });

    return res.status(200).json({ carInfo, totalRecord });
  }
  else if(req.method==="POST"){
   
    const carInfo=req.body
  
    const createdCarInfo=await CarInfo.create(carInfo)
    return res.status(201).json(createdCarInfo)

  }
}
