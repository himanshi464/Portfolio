import React from 'react'
import Video from '../components/home/video'
import Homeherotext from '../components/home/homeherotext'
import Homebottomtext from '../components/home/homebottomtext'

const Home = () => {
  return (
    <div>
        <div className='h-screen w-screen  fixed '>
        <Video />

        </div>
        <div className='h-screen w-screen relative flex overflow-hidden flex-col justify-between'>
            <Homeherotext />
            <Homebottomtext />
        </div>
      
    </div>
  )
}

export default Home
