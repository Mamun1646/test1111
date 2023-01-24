import { NextApiRequest, NextApiResponse } from "next";
import { User } from "database/entity/user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (req.method === "GET") {
    const user = await User.findOne({ where: { id } });
    return res.status(200).json(user);
  }
  if (req.method === "PATCH") {
    const user = await User.update(
      {
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: { id: id },
      }
    );
    return res.status(200).json(user);
  }
}
