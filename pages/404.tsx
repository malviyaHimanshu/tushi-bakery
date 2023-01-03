import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    const [time, setTime] = useState(5);

    useEffect(() => {
        console.log(("onMount"));
        setInterval(() => {
            setTime(time => time-1);
        }, 1000);

        setTimeout(() => {
            router.push("/");
        }, 5000)
    }, [])

    return (
        <div className='text-center'>
            <h1 className='text-3xl lg:text-5xl text-red-500 font-bold mb-5'>⚠️ Error 404 ⚠️</h1>
            <p className='text-xl lg:text-3xl font-semibold'>This page does not exist.</p>
            <p className='text-base lg:text-xl mt-2'>Returning to <Link href='/'><span className='text-blue-600 underline'>Home</span></Link> in {time} seconds...</p>
        </div>
    );
};

export default ErrorPage;