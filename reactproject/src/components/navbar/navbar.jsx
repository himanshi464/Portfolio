import React from 'react'

const Navbar = ({ setOpen }) => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between bg-black px-6 py-4 text-white">
        <span className="text-2xl font-[font1] tracking-wide">Detox</span>
      <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded border rounded-full border-white  text-sm uppercase tracking-[0.3em] transition hover:bg-white hover:text-black"

        ><div className='px-9 py-5 font- [font1] text-size: 10px '>
          Menu
        </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
