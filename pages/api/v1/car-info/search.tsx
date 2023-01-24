import { CarInfo } from "database/entity/carinfo";
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
    console.log(keyword,DateKeyword)
       if(keyword==="" && DateKeyword){
       keyword="lkdjsfhksjf"}
       const limit = 10;
       const carInfoLenngth = await CarInfo.findAll({
         attributes: ["veichle_name", "chasis_no", "engine_no","registration_on_date"],
         order: [["updatedAt", "DESC"]],
         where: {
           [Op.or]: [
             {
               veichle_name: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
               chasis_no: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
              from: DateKeyword,
             },
           ],
         },
       });
   
       const carInfo= await CarInfo.findAll({
        
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
         where: {
           [Op.or]: [
             {
               veichle_name: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
               chasis_no: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
               engine_no: {
                 [Op.like]: `%${keyword}%`,
               },},
             {
               model_year: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
               exporter_name: {
                 [Op.like]: `%${keyword}%`,
               },
             },
             {
               from: DateKeyword,
             },
           ],
         },
       });
     
       const totalRecord = carInfoLenngth.length;
       console.log(totalRecord);
       return res.status(200).json({ carInfo, totalRecord });
     }
}
