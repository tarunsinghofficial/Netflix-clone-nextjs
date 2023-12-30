import Image from 'next/image'
import HomeComponent from './components/Home'
import Dropdown from './components/Dropdown'
import { myData } from './data/data'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Link from 'next/link'

import sample from '../app/assets/sample.jpg'

export default function Home() {

  return (
    <div className='relative flex flex-col'>
      <Navbar />
      <div className='relative'>
        <div>
          <div className='bg-gradient-to-b from-[#111111] opacity-80 absolute w-full h-[60vh] md:h-[65vh] lg:h-[75vh]' />
          <Image
            className='w-full object-cover h-[60vh] md:h-[65vh] lg:h-[75vh]'
            src={sample}
            height={'50%'}
            alt="netflix-banner"
          />
          <div className='bg-gradient-to-t from-black opacity-80 bottom-[23.5em] md:bottom-[20em] lg:bottom-[15em] absolute w-full h-[60vh] md:h-[65vh] lg:h-[75vh]' />
        </div>
        <div className='relative h-[60vh] md:h-[65vh] lg:h-[35vh] bottom-[20em] lg:bottom-[25em] items-center text-center'>
          <div className="flex flex-col gap-6 top-56 px-4 justify-center items-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold ">
              Laughter. Tears. Thrills. Find it all on Netflix
            </h1>
            <h3 className="text-xl md:text-3xl lg:text-3xl font-medium justify-center items-center">
              Endless entertainment starts at just ₹ 149. Cancel anytime
            </h3>
            <h4 className="text-lg md:text-xl lg:text-xl">Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2">
              <input type="text" className='bg-transparent w-64 md:w-80 lg:w-96 p-4 border border-red-600 focus:border-red-600 text-white rounded-md placeholder:text-white' placeholder='Enter your email' />
              <Link href="/browse" className='bg-red-600 text-white font-bold p-3 w-36 h-10 md:w-56 md:h-14 lg:w-56 lg:h-14 text-sm md:text-2xl lg:text-2xl flex items-center justify-center rounded-md hover:bg-red-700'>Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <main className='-mt-[24em] md:-mt-[15.5em]'>
        <section className='my-4'>
          {myData.data.map((data, index) => (
            <HomeComponent key={index} header={data.header} subheader={data.subheader} imgUrl={data.imgUrl} />
          ))}
        </section>
        <section className='w-full bg-black'>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center px-12 py-10 md:px-80 md:py-24">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col">
            {myData.faqData.map((item, index) => (
              <Dropdown key={index} title={item.title} content={item.content} />
            ))}
          </div>
          <div className='flex items-center justify-center flex-col py-10 gap-8'>
            <h4 className="text-lg md:text-xl lg:text-xl px-10 md:px-40">Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-2">
              <input type="text" className='bg-transparent w-64 md:w-80 lg:w-96 p-4 border border-red-600 focus:border-red-600 text-white rounded-md placeholder:text-white' placeholder='Enter your email' />
              <button className='bg-red-600 text-white text-2xl font-bold p-3 w-44 md:w-56 lg:w-56 rounded-md hover:bg-red-700'>Get Started</button>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  )
}
