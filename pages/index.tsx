import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className='text-xl font-semibold md:text-2xl lg:text-3xl mb-5'>Welcome to Tushi Bakery 🍰</h1>
      <p className='text-base lg:text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum explicabo beatae incidunt, similique dolorem labore? Quos accusamus nemo, mollitia eligendi eius a rem alias quia?</p>
      <p className='text-base lg:text-lg mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem assumenda eligendi ad.</p>
      <Link href='/shop'>
        <button className='bg-[#C58940] hover:bg-amber-900 transition duration-300 ease text-[#f2f2f2] py-2 px-8 mt-5 rounded-md'>Shop</button>
      </Link>
    </div>
  )
}
