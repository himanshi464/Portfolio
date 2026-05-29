import React from 'react'

const ProjectCard = (props) => {
    const {
        image1,
        image2,
        title1 = 'Internships',
        desc1 = 'Gain hands-on experience through real-world internships that bridge learning and industry impact.',
        title2 = 'Hackathons',
        desc2 = 'Participated in collaborative hackathons delivering rapid prototypes and polished demos.',
        link1 = '#',
        link2 = '#'
    } = props

    return (
        <>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover flex' src={image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex flex-col items-center justify-center left-0 h-full w-full bg-black/15 px-6 text-center'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>{title1}</h2>
                    <p className='mt-4 text-white text-2xl max-w-[70%]'>{desc1}</p>
                    {link1 && link1 !== '#' && (
                        <a href={link1} target="_blank" rel="noopener noreferrer" className='mt-6 px-6 py-3 border-2 border-white text-white font-[font1] uppercase rounded-full hover:bg-white hover:text-black transition-all'>
                            View
                        </a>
                    )}
                </div>
            </div>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex flex-col items-center justify-center left-0 h-full w-full bg-black/15 px-6 text-center'>
                    <h2 className='uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full '>{title2}</h2>
                    <p className='mt-4 text-white text-2xl max-w-[70%]'>{desc2}</p>
                    {link2 && link2 !== '#' && (
                        <a href={link2} target="_blank" rel="noopener noreferrer" className='mt-6 px-6 py-3 border-2 border-white text-white font-[font1] uppercase rounded-full hover:bg-white hover:text-black transition-all'>
                            View
                        </a>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectCard