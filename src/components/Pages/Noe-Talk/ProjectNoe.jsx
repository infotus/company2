import React from 'react'
import noeimg from '../../../assets/noe-talk.png'

function ProjectNoe() {
  return (
    <div className='grid grid-rows-1 gap-16 bg-cyan-950 md:p-10 p-4'>
      <span className=' flex items-center justify-center text-3xl text-white pt-28'> NOE-TALK</span>
      <section className='h-[50%] w-full'>
        <div className='grid md:grid-cols-2 place-content-center gap-4'>
        <div>
          <span className='p-5 text-center text-white text-2xl'> AI-Chat </span>
          <p className="p-5 text-center text-white min-w-[50%]">
            We are excited to announce the launch of our new AI Conversation feature Noe-bot, designed to enhance user interactions and streamline communication. This innovative tool leverages advanced artificial intelligence to provide real-time, intuitive responses, making it easier than ever to get the information you need.
          </p>
        </div>
        <img src={noeimg} alt="/" className="p-1 md:w-[40%] w-[60%] pt-14 "/>
        </div>
      </section>

      <section>
        <div className='grid md:grid-cols-2 gap-4'>
          <img src= {noeimg} alt="" className='p-1 md:w-[40%] w-[60%] hidden lg:block pt-14' />
          <div>
            <span className='p-5 text-center text-white text-2xl'> Real Human Chat</span>
            <p className='p-5 text-center text-white min-w-[50%]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio officia mollitia possimus delectus alias? Delectus saepe cumque quam officia explicabo sapiente illo deserunt! Natus unde dolor ab magnam harum.
            </p>
          </div>
          <img src= {noeimg} alt="" className='p-1 md:w-[40%] w-[60%] md:hidden pt-14' />
        </div>
      </section>

      <section>
        <div className='grid md:grid-cols-2 gap-4'>
          <div>
            <span className='p-5 text-center text-white text-2xl'> Courses </span>
            <p className="p-5 text-center text-white min-w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sapiente doloremque incidunt vero corrupti animi repudiandae deserunt iusto dolorem consectetur, temporibus alias reprehenderit maxime laudantium debitis porro nostrum recusandae molestias?
            </p>
          </div>

            <img src={noeimg} alt="/" className="p-1 md:w-[40%] w-[60%] pt-14"/>
          </div>
      </section>
    </div>
  )
}

export default ProjectNoe