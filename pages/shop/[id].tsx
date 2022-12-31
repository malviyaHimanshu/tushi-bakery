import { useRouter } from "next/router";

const BakeryItem = () => {
    const bakery_items = [
        {
            "id": 1,
            "name": "Sushi 🍣",
            "price": "₹450",
            "image": "",
            "description": "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is \"sushi rice,\" also referred to as shari, or sumeshi."
        },
        {
            "id": 2,
            "name": "Pretzel 🥨",
            "price": "₹699",
            "image": "",
            "description": "A pretzel, from German pronunciation, standard German: Breze is a type of baked bread made from dough that is commonly shaped into a knot. The traditional pretzel shape is a distinctive symmetrical form, with the ends of a long strip of dough intertwined and then twisted back onto itself in a particular way."
        },
        {
            "id": 3,
            "name": "Bagel 🥯",
            "price": "₹75",
            "image": "",
            "description": "A bagel is a bread roll originating in the Jewish communities of Poland. It is traditionally shaped by hand into a roughly hand-sized ring from yeasted wheat dough that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior."
        },
        {
            "id": 4,
            "name": "Baguette Bread 🥖",
            "price": "₹79",
            "image": "",
            "description": "A baguette is a long, thin type of bread of French origin that is commonly made from basic lean dough. It is distinguishable by its length and crisp crust. A baguette has a diameter of about 5 to 6 centimetres and a usual length of about 65 cm, although a baguette can be up to 1 m long."
        },
        {
            "id": 5,
            "name": "Pancakes 🥞",
            "price": "₹225",
            "image": "",
            "description": "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread."
        },
    ]

    const router = useRouter();
    const id = router.query.id;

    const product = bakery_items.find(item => item.id.toString() === id);

    return (
        <div>
            <h1 className="text-xl lg:text-3xl mb-5 font-semibold">{product?.name}</h1>
            <p className="text-base lg:text-lg my-2 font-bold">{product?.price}</p>
            <p className="text-base lg:text-lg">{product?.description}</p>
            <button onClick={() => router.push('/404')} className="border-2 border-[#C58940] hover:bg-[#C58940] transition duration-100 ease hover:text-[#f2f2f2] py-2 px-8 mt-5 rounded-md" >Buy</button>
        </div>
    );
}
 
export default BakeryItem;