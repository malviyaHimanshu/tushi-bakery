import Image from "next/image";
import Link from "next/link";
import tushiPhoto from "../public/tushi.jpeg";

const About = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl mb-5'>About Us 🧁</h1>
            <div className="flex flex-wrap md:flex-nowrap gap-5 md:gap-10">
                <Image src={tushiPhoto} alt="" height={280} className="rounded-lg pointer-events-none"/>
                <div>
                    <p className='text-base lg:text-lg'>In the memory of Tushi, This bakery was established in 2022. We are currently a local brand working towards making the best and delicious bakes.<br/>Feel free to contact us anytime.</p>
                    <Link href='/contact'>
                        <button className='bg-[#C58940] hover:bg-amber-900 transition duration-300 ease text-[#f2f2f2] py-2 px-8 mt-5 rounded-md'>Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default About;