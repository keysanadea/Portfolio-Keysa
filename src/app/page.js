import { Navbar } from '@/components'

export default function Home() {
  return (
    <div className="bg-[url('/img/home_bg.png')] bg-cover h-screen w-screen overflow-hidden">
      <Navbar></Navbar>
      <div className='flex flex-col h-full w-full md:flex-row md:justify-center md:space-x-12 md:items-center'>
        <div className='w-1/2 mt-12 mx-auto md:hidden'>
          <img src="/img/self_img2.png" className='' alt='Keysa image'></img>
        </div>
        <div className='flex h-fit w-fit mx-auto mt-12 md:items-center md:mt-0'>
          <p className='font-normal p-5 text-2xl text-center md:text-left md:text-3xl'>Hey, I’m
            <span className='text-[#FF6161] font-bold'> Keysa,</span> an Informatics<br></br> engineers student at
            <span className='text-[#4767C3] font-bold'> Sepuluh <br></br>Nopember Institute of Technology</span></p>
        </div>
        <div className='hidden md:flex md:mr-8 p-8'>
          <img src="/img/self_img2.png" className='m-auto w-full' alt='Keysa image'></img>
        </div>
      </div>
    </div>
  )
}
