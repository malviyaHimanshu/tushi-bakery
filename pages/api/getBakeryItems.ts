import type { NextApiRequest, NextApiResponse } from 'next'
import Bakery_items from '../../json/BakeryItems.json';

export type BakeryItemType = {
    id: number,
    name: string,
    price: string,
    image: string,
    description: string
}

export default function getBakeryItems(req: NextApiRequest, res: NextApiResponse<BakeryItemType[]>) {
    console.log(Bakery_items)
    res.status(200).json(Bakery_items["Bakery_items"]);  
}
