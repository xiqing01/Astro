import React from 'react'
import CutCornerButton from '../components/CutCornerButton'
import Hexagon from '../components/Hexagon'
import Circle from '../components/Circle'

const Hero = () => {
  return (
    <section className='py-24 md:py-52 overflow-hidden'>
      <div className='container  mx-auto text-amber-50'>
        <p className='uppercase font-extrabold text-center text-zinc-500 tracking-wide'>Introducing Blokforge</p>
        <h1 className='font-black text-5xl md:text-6xl lg:text-7xl text-center  max-w-3xl mx-auto '>The Future of Blokchain is Here.</h1>
        <p className='text-center text-xl md:text-2xl mt-6 max-w-xl mx-auto  text-zinc-400'>
          Blckforge is pioneering the future of blockchain technology, providing innovative solutions for a decentralized world.
        </p>
        <div className='flex justify-center mt-10'>
          <CutCornerButton children='Get Started' />
        </div>
        <div className='flex justify-center mt-24'>
          <div className='inline-flex  relative z-0 mx-auto w-fit'>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Hexagon className='size-[1100px]' />
            </div>
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Hexagon className='size-[1800px]' />
            </div>
            <Circle className='left-[200px] top-[-920px]' img='cube' />
            <Circle className='left-[200px] top-[270px]' img='cuboid' />
            <Circle className='left-[-600px] top-[-80px]' img='torus' />
        
            <img src="/assets/images/icosahedron.png" alt=""  className='absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[30%]'/>
            <img src="/assets/images/icosahedron.png" alt="Icosahedron 3D Image" className='w-[500px]' />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-40 md:mt-80 gap-4'>
          <div className='h-10 w-5 outline outline-[6px] outline-fuchsia-500/30 rounded-full animate-pulse pt-2 inline-flex justify-center'>
            <div className='h-3 w-1 bg-fuchsia-500 rounded-full'>

            </div>
          </div>
          <p className='uppercase text-zinc-500 font-extrabold tracking-wider'>Scroll to learn more</p>
        </div>
      </div>
    </section>
  )
}

export default Hero