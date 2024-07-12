import React from 'react'
import noeimg from '../../../assets/noe-talk.png'

function ProjectNoe() {
  return (
    <div className='grid grid-rows-1 gap-16 bg-cyan-950'>
      {/* <span className=' flex items-center justify-center text-3xl text-white p-5 pb-10'> NOE-TALK</span> */}
      <section className='h-[50%] w-full pt-20 pb-10'>
        <span className=' flex items-center justify-center text-3xl text-white p-5 pb-10'> NOE-TALK</span>
        <div className='grid grid-cols-2 gap-4'>
        <div>
          <span className='p-5 text-center text-white text-2xl'> AI-Chat </span>
          <p className="p-5 text-center text-white min-w-[50%]">
            We are excited to announce the launch of our new AI Conversation feature Noe-bot, designed to enhance user interactions and streamline communication. This innovative tool leverages advanced artificial intelligence to provide real-time, intuitive responses, making it easier than ever to get the information you need.
          </p>
        </div>
        <img src={noeimg} alt="/" className="p-1 md:w-[40%] min-w-[60%] pt-14 "/>
        </div>
      </section>

      <section>
        <div className='grid grid-cols-2 gap-4'>
          <img src= {noeimg} alt="" className='p-2 md:w-[50%] pt-14' />
          <div>
            <span className='p-5 text-center text-white text-2xl'> Real Human Chat</span>
            <p className='p-5 text-center text-white min-w-[50%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio officia mollitia possimus delectus alias? Delectus saepe cumque quam officia explicabo sapiente illo deserunt! Natus unde dolor ab magnam harum.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <span className='p-5 text-center text-white text-2xl'> Courses </span>
            <p className="p-5 text-center text-white min-w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente doloremque incidunt vero corrupti animi repudiandae deserunt iusto dolorem consectetur, temporibus alias reprehenderit maxime laudantium debitis porro nostrum recusandae molestias?
            </p>
          </div>

            <img src={noeimg} alt="/" className="p-1 min-w-[50%] pt-14"/>
          </div>
      </section>
    </div>
  )
}

export default ProjectNoe