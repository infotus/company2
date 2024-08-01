import React from 'react'
import test from '../../../assets/logo_dark.png'

function About() {
  return (
    <div className='bg-cyan-950 grid place-items-center gap-14 p-2 pt-32'>
      
      <div className='p-2 gap-2'>
        <h1 className='grid place-content-center text-3xl p-2'>Our Policy</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, totam velit molestiae similique porro maiores aliquid eum perferendis blanditiis delectus animi dicta obcaecati accusamus quibusdam assumenda at! Consequatur, vel magnam?</p>
      </div>

      <div className='p-2 gap-2'>
        <h1 className='grid place-content-center text-3xl p-2'>Our Mission</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, ab, expedita in nobis quas iure corrupti culpa quisquam, harum voluptate nesciunt quod eos quia aperiam fuga optio sit nam error.</p>
      </div>
      
      <div>
        <h1 className='grid place-content-center text-3xl p-6'>Our Background</h1>
        <div className='grid grid-cols-1 gap-14 md:grid-cols-2'>
          {/* Co-Founder Info */}
          <div className='grid gap-5 p-2 md:grid-cols-2 place-items-center'>
            <img className='grid md:grid-cols-2 w-[50%] md:w-[60%]' src={test} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rerum vel nemo ad ipsum fuga voluptates, nisi excepturi eos, quis eius. Id minima sed asperiores, itaque excepturi similique nisi quae?</p>
          </div>
          {/* Co-Founder Info */}
          <div className='grid gap-5 p-2 md:grid-cols-2 place-items-center'>
            <img className='grid md:grid-cols-2 w-[50%] md:w-[60%]' src={test} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores rerum vel nemo ad ipsum fuga voluptates, nisi excepturi eos, quis eius. Id minima sed asperiores, itaque excepturi similique nisi quae?</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About