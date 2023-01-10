import type { NextApiRequest, NextApiResponse } from 'next'
import { data } from '../../data/BakeryItems';

export type BakeryItemType = {
    id: number,
    name: string,
    price: string,
    image: string,
    description: string
}

export default async function getBakeryItems(req: NextApiRequest, res: NextApiResponse<BakeryItemType[]>) {    
    res.status(200).json(data["Bakery_items"]);  
}
