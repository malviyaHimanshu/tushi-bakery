import Link from 'next/link'

export async function getStaticProps() {
    const res = await fetch(`http://0.0.0.0:3000/api/getBakeryItems`); 
    const data = await res.json()

    return {
        props: { items: data },
        revalidate: 1
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