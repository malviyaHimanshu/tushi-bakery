import type { NextApiRequest, NextApiResponse } from 'next'
import Items from '../../json/BakeryItems.json';

export type BakeryItemType = {
    id: number,
    name: string,
    price: string,
    image: string,
    description: string
}

export default function getBakeryItems(req: NextApiRequest, res: NextApiResponse<BakeryItemType[]>) {
    res.status(200).json(Items["Bakery_items"]);  
}
