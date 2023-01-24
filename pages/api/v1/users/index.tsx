import { NextApiRequest, NextApiResponse } from "next";

import { User } from "database/entity/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "GET") {
    const user = await User.findAll();
    return res.status(200).json(user);
  }
  // else if (req.method === "POST") {
  //     const user = await User.create(req.body);
  //     return res.status(200).json(user);
  //   }
    else if (req.method === "POST") {
      const user = await User.findOne({ where: { email:req.body.email } });
      
    const userJson= res.status(200).json(user);
    console.log(userJson)
    return userJson;
    }
}
