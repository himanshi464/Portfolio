import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const Fullscreennav = ({ navOpen, setOpen }) => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
    setOpen(false)
  }
  function gsapAnimation() {
    const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none'
        })
    }

    useEffect(() => {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }

    }, [navOpen])

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-[999] bg-black overflow-hidden flex items-center fullscreennav" style={{ display: 'none' }}>

      <div
        onClick={() => setOpen(false)}
        className="absolute top-8 right-10 z-[1000] cursor-pointer "
      >
        <div className="relative w-10 h-10">
          <span className="absolute w-full h-[2px] bg-white rotate-45 top-1/2"></span>
          <span className="absolute w-full h-[2px] bg-white -rotate-45 top-1/2"></span>
        </div>
      </div>

      <div className="absolute top-8 left-10 text-white text-4xl font-[font1] text-9xl">
        Detox
      </div>

      <div className="w-full px-10 md:px-20">
        <div className="mb-16 mt-30 flex flex-col items-center gap-6 text-center">
          
        </div>

        <div className="border-t border-white/40 py-10 overflow-hidden">

          <h1 
            onClick={() => handleNavigation('/')}
            className="text-[6vw] uppercase leading-[0.8] text-center text-white font-[font1] relative z-10 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer hover:opacity-80"
          >
            Home
          </h1>

          <div className="absolute top-0 left-0 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="flex animate-marquee whitespace-nowrap items-center gap-10 bg-[#B32A5F]">

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-32 w-80 object-cover rounded-full shrink-0" src="/12.jpg" alt="" />

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-32 w-80 object-cover rounded-full shrink-0" src="/12.jpg" alt="" />

            </div>
          </div>
        </div>

        <div className="border-t border-white/40 py-10 relative group overflow-hidden">

          <h1 
            onClick={() => handleNavigation('/projects')}
            className="text-[6vw] uppercase leading-[0.8] text-center text-white font-[font1] relative z-10 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer hover:opacity-80"
          >
            Projects
          </h1>

          <div className="absolute top-0 left-0 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="flex animate-marquee whitespace-nowrap items-center gap-10 bg-[#B32A5F]">

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-28 w-72 object-cover rounded-full shrink-0" src="/23.jpg" alt="" />

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-28 w-72 object-cover rounded-full shrink-0" src="/23.jpg" alt="" />

            </div>
          </div>
        </div>

        <div className="border-t border-white/40 py-10 relative group overflow-hidden border-b">

          <h1 
            onClick={() => handleNavigation('/agents')}
            className="text-[6vw] uppercase leading-[0.8] text-center text-white font-[font1] relative z-10 transition-opacity duration-300 group-hover:opacity-0 cursor-pointer hover:opacity-80"
          >
            About
          </h1>

          <div className="absolute top-0 left-0 w-full h-full flex items-center opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="flex animate-marquee whitespace-nowrap items-center gap-10 bg-[#B32A5F]">

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-28 w-72 object-cover rounded-full shrink-0" src="/12.jpg" alt="" />

              <h2 className="text-[5vw] uppercase text-white">
                Break The Matrix Code Your Aesthetic.
              </h2>
              <img className="h-28 w-72 object-cover rounded-full shrink-0" src="/12.jpg" alt="" />

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Fullscreennav