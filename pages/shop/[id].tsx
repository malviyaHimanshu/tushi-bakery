import { useRouter } from "next/router";

export async function getStaticPaths() {
    const res = await fetch(`http://0.0.0.0:3000/api/getBakeryItems`);
    const data: any = await res.json();
    console.log("this is data : ", data);

    const paths = data.map((item: any) => {
        return {
            params: { id: item.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context: any) {
    const id = context.params.id;
    const res = await fetch(`http://0.0.0.0:3000/api/getItemByID?id=${id}`);
    const data: any = await res.json();

    return {
        props: { product: data },
        revalidate: 1
    }
}

const BakeryItem = ({ product }: any) => {
    return (
        <div>
            <h1 className="text-xl lg:text-3xl mb-5 font-semibold">{product?.name}</h1>
            <p className="text-base lg:text-lg my-2 font-bold">{product?.price}</p>
            <p className="text-base lg:text-lg">{product?.description}</p>
            <button onClick={() => useRouter().push('/404')} className="border-2 border-[#C58940] hover:bg-[#C58940] transition duration-100 ease hover:text-[#f2f2f2] py-2 px-8 mt-5 rounded-md" >Buy</button>
        </div>
    );
}
 
export default BakeryItem;