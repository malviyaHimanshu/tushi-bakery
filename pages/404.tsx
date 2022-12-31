import Link from 'next/link'

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <h1 className='text-3xl lg:text-5xl text-red-500 font-bold mb-5'>⚠️ Error 404 ⚠️</h1>
            <p className='text-xl lg:text-3xl font-semibold'>This page does not exist.</p>
            <p className='text-base lg:text-xl mt-2'>Get back to <Link href='/'><span className='text-blue-600 underline'>Home</span></Link></p>
        </div>
    );
};

export default ErrorPage;