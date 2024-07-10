import React from 'react'
import noeimg from '../../../assets/noe-talk.png'

function ProjectNoe() {
  return (
    <div >
      <p className="p-10 test-center py-8">
        "We are excited to announce the launch of our new AI Conversation feature Noe-bot, designed to enhance user interactions and streamline communication. This innovative tool leverages advanced artificial intelligence to provide real-time, intuitive responses, making it easier than ever to get the information you need."
      </p>
      <div className="relative flex justify-center items-center h-auto w-[60%] shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e] left-[20%]">
          <img src={noeimg} alt="/" className="p-10 rounded-xl group-hover:opacity-10"/>
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="p-5 text-2xl font-bold text-white tracking-wider text-center">
                  Noe-Talk
              </h3>
              <a href="/">
                  <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer font-lg">More Info</p>
              </a>
          </div>
      </div>
    </div>
  )
}

export default ProjectNoe