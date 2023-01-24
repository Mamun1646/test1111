import { ExpenditureV1 } from "database/entity/expenditure/expenditureV1";
import { NextApiRequest, NextApiResponse } from "next";

const { Op } = require("sequelize");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   let { title, from_date,to_date} = req.query;
 
//  title="Toyota";
//  from_date=new Date();
// const to_date=new Date();

  if (req.method === "GET") {
    //blocking unwanted condition
    if (title === "") {
      title = "lkdjsfhksjf";
    }
    console.log("============================",from_date)
  
    const Total = await ExpenditureV1.sum('value',{ where: {
      [Op.and]: [
        {
          title: {
            [Op.like]: `%${title}%`,
          },
        },
        {date: {
          [Op.and]: {
            [Op.gte]:from_date,
            [Op.lte]: to_date
          }
        }}
      ],
    },})
console.log("++++++++++++++++++",from_date)
    const expenditure = await ExpenditureV1.findAll({
     
      attributes: ["id","date", "title", "value" ],
      where: {
        [Op.and]: [
          {
            title: {
              [Op.like]: `%${title}%`,
            },
          },
          {date: {
            [Op.and]: {
              [Op.gte]:from_date,
              [Op.lte]: to_date
            }
          }}
        ],
      },
    });
    
   
    return res.status(200).json({  expenditure,Total });
  }
}
