import { NextApiRequest, NextApiResponse } from "next";
import Items from '../../json/BakeryItems.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    const dataByID = Items["Bakery_items"].find((item: any) => item.id.toString() === id);
    
    res.status(200).json(dataByID)
}