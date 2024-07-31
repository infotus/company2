import React from 'react'
import test from '../../../assets/logo_dark.png'

function About() {
  return (
    <div className='grid grid-cols-1 bg-cyan-950 place-items-center text-center gap-4 p-2 m-auto pt-32'>
      
      <div className='p-2 gap-2'>
        <h1 className='text-3xl'>Our Policy</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam velit molestiae similique porro maiores aliquid eum perferendis blanditiis delectus animi dicta obcaecati accusamus quibusdam assumenda at! Consequatur, vel magnam?</p>
      </div>

      <div className='p-2 gap-2'>
        <h1 className='text-3xl'>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ab, expedita in nobis quas iure corrupti culpa quisquam, harum voluptate nesciunt quod eos quia aperiam fuga optio sit nam error.</p>
      </div>
      
      <div className='p-2 gap-2 place-items-center'>
        <h1 className='text-3xl'>Our Story</h1>
        <div className=''>
          {/* Co-Founder Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
            <img className='w-[50%] md:w-[30%]' src={test} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rerum vel nemo ad ipsum fuga voluptates, nisi excepturi eos, quis eius. Id minima sed asperiores, itaque excepturi similique nisi quae?</p>
          </div>
          {/* Co-Founder Info */}
          <div className='grid grid-cols-1 md:grid-cols-2 p-2 gap-2'>
            <img className='w-[50%] md:w-[30%]' src={test} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rerum vel nemo ad ipsum fuga voluptates, nisi excepturi eos, quis eius. Id minima sed asperiores, itaque excepturi similique nisi quae?</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About