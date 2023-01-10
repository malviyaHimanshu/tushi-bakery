import { NextApiRequest, NextApiResponse } from "next";
import { data } from "../../data/BakeryItems";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const dataByID = data["Bakery_items"].find((item: any) => item.id.toString() === id);

    res.status(200).json(dataByID)
}