import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <Link className='text-[2vw] hover:border-[#9B194A] hover:text-[#9B194A] border-2 leading-tight  border-white rounded-full  px-9 gap-5 pt-8 pb-7 uppercase' to='/projects'>Unlock My Designs</Link>
        <Link className='text-[2vw] hover:border-[#9B194A] hover:text-[#9B194A] border-2 leading-tight   border-white rounded-full px-9 gap-5 pt-8 pb-7 uppercase' to='/agents'>View The Blueprint</Link>
    </div>
  )
}

export default Homebottomtext
