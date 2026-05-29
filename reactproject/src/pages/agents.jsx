import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const imagearray=[
  '/1.jpg',
  '/2.jpg',
  '/3.jpg',
  '/4.jpg',
  '/5.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg'
]

const Agents = () => {

  const imagedivref = useRef(null)
  const imageref2 = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (imagedivref.current) {
      gsap.to(imagedivref.current, {
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: imagedivref.current,
          markers: true,
          start: 'top 10%',
          end: 'top -100% ',
          scrub:true,
          pin:true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin:1,
          invalidateOnRefresh: true,
          onUpdate:(elem)=>{
            let imageIndex;
            if(elem.progress<1){
              imageIndex = Math.floor(elem.progress * imagearray.length)
            }
            else{
              imageIndex=imagearray.length-1
            }

            if(imageref2.current){
              imageref2.current.src=imagearray[imageIndex]
            }
            
          }

        },
      })
    }
  }, [])
  

  return (
    <div className='relative bg-black min-h-full w-full overflow-hidden py-1'>
      <div ref={imagedivref} className='absolute overflow-hidden h-[25vw] rounded-3xl w-[20vw] top-0 left-[30vw] bg-black'>
        <img ref={imageref2} src='/1.jpg' alt="Agent" className="w-full h-full object-cover" />
      </div>
      <div className='relative font-[font1]'>
        <div className='mt-[25vw] text-center justify-center leading-none text-white'  >
          <h1 className='text-[10vw] text-center uppercase leading-none tracking-tighter'>
            WHO I<br />
            AM
          </h1>
        </div>
        <div className='pl-[50%] mt-20'>
          <div className='text-5xl font-[font1] font-weight-light tracking-wide text-white px-50'>Bridging the gap between design logic and clean frontend execution. I’m that developer who actually cares about UX, crafting intuitive user journeys and turning them into highly responsive, scalable web apps that look exactly as good as the initial prototype.</div>
        </div>
      </div>
      
    <div className='font-[font1]'>
        <div className='mt-[20vw] text-center leading-none text-white'  >
          <h1 className='text-[10vw] text-center uppercase leading-none tracking-tighter'>
            WHAT I DO
          </h1>
    <div className='pr-[50%] mt-20 text-right'>
      <p className='text-5xl font-[font1] font-weight-light tracking-wide text-white'>
        My engineering mindset was forged in competitive tech sandboxes with 40+ hackathon credentials to prove it. Whether I'm securing top honors at major tech fests or building low-latency, compliance-focused AI tools, I'm all about high-impact execution and shipping functional aesthetics.
            </p>
        </div>
      </div>
      </div>
      <div>
      </div>
    <div className='relative font-[font1]'>
        <div className='mt-[15vw] mr-[5vw] text-center justify-center leading-none text-white'  >
          <h1 className='text-[10vw] text-center uppercase leading-none tracking-tighter'>
            LET’S BUILD SOMETHING UNREAL
          </h1>
        </div>
        <div className='pl-[40%] mt-20'>
          <div className='text-5xl font-[font1] font-weight-light tracking-wide text-white px-50'>Got a project that needs both killer aesthetics and clean frontend code? Or just want to talk AI privacy and design systems? Hit my inbox and let’s lock it in and ship something impactful.<br />Gmail :<br /> himanshididwania2007@gmail.com</div>
        </div>
      </div>
    </div>
  )
}

export default Agents
