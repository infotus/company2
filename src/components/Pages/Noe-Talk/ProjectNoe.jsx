import React from 'react'
import noeimg from '../../../assets/noe-talk.png'

function ProjectNoe() {
  return (
    <div >
      <section className='h-[50%] w-full pt-20 pb-10'>
        <span className=' flex items-center justify-center text-lg '> NOE-TALK</span>
        <div className='grid grid-cols-2 gap-4'>
        <p className="p-5 test-center w-[50%]">
          "We are excited to announce the launch of our new AI Conversation feature Noe-bot, designed to enhance user interactions and streamline communication. This innovative tool leverages advanced artificial intelligence to provide real-time, intuitive responses, making it easier than ever to get the information you need."
        </p>

        <img src={noeimg} alt="/" className="p-1 w-[50%]"/>
        </div>
      </section>
      <div className='grid grid-cols-2 gap-4'>
        <p className='p-5 test-center w-[50%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio officia mollitia possimus delectus alias? Delectus saepe cumque quam officia explicabo sapiente illo deserunt! Natus unde dolor ab magnam harum.
        </p>
        <img src= {noeimg} alt="" className='p-2' />
      </div>
    </div>
  )
}

export default ProjectNoe