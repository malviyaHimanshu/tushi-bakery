import Link from 'next/link'

export const getStaticProps = () => {
    const bakery_items = [
        {
            "id": 1,
            "name": "Sushi 🍣",
            "description": "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanied by a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is \"sushi rice,\" also referred to as shari, or sumeshi."
        },
        {
            "id": 2,
            "name": "Pretzel 🥨",
            "description": "A pretzel, from German pronunciation, standard German: Breze is a type of baked bread made from dough that is commonly shaped into a knot. The traditional pretzel shape is a distinctive symmetrical form, with the ends of a long strip of dough intertwined and then twisted back onto itself in a particular way."
        },
        {
            "id": 3,
            "name": "Bagel 🥯",
            "description": "A bagel is a bread roll originating in the Jewish communities of Poland. It is traditionally shaped by hand into a roughly hand-sized ring from yeasted wheat dough that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior."
        },
        {
            "id": 4,
            "name": "Baguette Bread 🥖",
            "description": "A baguette is a long, thin type of bread of French origin that is commonly made from basic lean dough. It is distinguishable by its length and crisp crust. A baguette has a diameter of about 5 to 6 centimetres and a usual length of about 65 cm, although a baguette can be up to 1 m long."
        },
        {
            "id": 5,
            "name": "Pancakes 🥞",
            "description": "A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter. It is a type of batter bread."
        },
    ]
    
    return {
        props: {items: bakery_items}
    }
}

const Shop = ({ items }: any) => {

    return (
        <div>
            <h1 className="text-xl lg:text-3xl font-semibold">Shop 🛒</h1>
            <div className="products mt-5 lg:mt-7 flex flex-wrap gap-2">
                { items.map((item: any) => (
                    <Link href={'/shop/' + item.id}>
                        <div className="border-2 border-white hover:border-[#C58940] transition duration-100 ease rounded-lg p-4 px-6 bg-white">
                            <h1 className="text-lg lg:text-xl font-semibold">{item.name}</h1>
                        </div>
                    </Link>
                )) }
            </div>
        </div>
    );
}
 
export default Shop;