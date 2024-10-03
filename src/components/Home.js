import React from 'react'

import coverImage from '../assets/cover-img.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>

    <div className='grid grid-cols-2 place-items-center w-3/4 mx-auto'>
      <img src={coverImage} alt="" className="w-[500px]" />
      <h1 className="text-xl mx-10">Snap, Upload, Chat: Your Visuals, Our AI, Endless Insights.</h1> 
      <Link to='/chat' className='col-span-2 bg-midground p-2 rounded-sm text-white hover:bg-accent transition-all'>Get Started</Link>
    </div>
    
    </>
  )
}

export default Home