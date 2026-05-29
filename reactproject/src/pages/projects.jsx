import React, { useEffect } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {

  const projects = [{
    image1: '/1.jpg',
    image2: '/2.jpg',
    title1: 'Internships',
    desc1: 'UI/UX Design Intern @ Icareheal — crafted intuitive user flows and scalable component libraries. +3 Internships',
    title2: 'Hackathons',
    desc2: '40+ Hackathon & Design Event Certifications in 2 years — proven track record of rapid prototyping under tight deadlines, winning top positions in high-velocity design and development challenges.',
    link1: 'https://drive.google.com/drive/folders/1PadS36ONPcx3Dgo443LDui8x2N-MgFdw?usp=sharing',
    link2: 'https://drive.google.com/drive/folders/1cJD9CYaG-AAm4GCz_t-ZYxWN8G3JsEA6?usp=sharing'
  }, {
    image1: '/3.jpg',
    image2: '/4.jpg',
    title1: 'Front-end Projects',
    desc1: 'Developed responsive React components and design systems used across multiple apps.',
    title2: 'Open Source',
    desc2: "Contributed to GSSoc'26 open source projects, enhancing features and fixing bugs in popular repositories.",
    link1: 'https://github.com/himanshi464',
    link2: 'https://www.linkedin.com/posts/himanshi-ab3269398_gssoc2026-opensource-womenintech-ugcPost-7457327701746540544-lTar/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGGSAOcBp222nMkKKSNjNqpThj8KsihzTMU'
  }, {
    image1: '/5.jpg',
    image2: '/6.jpg',
    title1: 'Research',
    desc1: 'Research training program by MSME Govt. of India on AI in business and published a research paper on the same.',
    title2: 'Competitions',
    desc2: 'Competed in design and dev challenges producing polished, production-ready prototypes.',
    link1: 'https://www.linkedin.com/feed/update/urn:li:activity:7404222208115376128/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGGSAOcBp222nMkKKSNjNqpThj8KsihzTMU',
    link2: 'https://drive.google.com/file/d/1hWHyLOCRSOnY_WjfJYa_fuHAt0-Yz-Ms/view?usp=sharing'
  }]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero', {
        height: '100px',
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -250%',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className='lg:p-4 p-2 min-h-screen bg-black text-white'>
      <div className='pt-[35vh] mb-8'>
        <h2 className='font-[font1] lg:text-[9vw] text-7xl uppercase mb-[100px] text-white'>Achievements</h2>
      </div>
      <div className='lg:-mt-20 lol overflow-hidden'>
        {projects.map(function (elem, idx) {
          return <div key={idx} className='hero w-full lg:h-[850px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2'>
            <ProjectCard
              image1={elem.image1}
              image2={elem.image2}
              title1={elem.title1}
              desc1={elem.desc1}
              title2={elem.title2}
              desc2={elem.desc2}
              link1={elem.link1}
              link2={elem.link2}
            />
          </div>
        })}

      </div>
    </div>
  )
}

export default Projects
