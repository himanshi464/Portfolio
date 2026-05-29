import React from 'react'


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video 
        className='h-full w-full object-cover' 
        autoPlay 
        muted 
        loop 

        src='/14864253_1920_1080_30fps.mp4'
      />
    </div>
  )
}

export default Video
