import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // function to display menu
  const handleMenu = () => {
    setMenu(!menu)
  }

   // function to make the navLinks disappear when clicked on the small screen
   const handleNavLinkDisappear = () => {
    setMenu(false);
  }

  return (
    <div class='header'>
      <section className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <nav className="w-full h-12 px-5 flex items-center justify-between md:w-4/5 md:mx-auto">
          <div>
            
            {/* <img src={logoImage} alt="logo" className="w-12 h-12" /> */}
          </div>

          <div className="text-2xl text-gray-400 md:hidden">
            {menu === false ? (
              <AiOutlineMenu onClick={handleMenu} />
            ) : (
              <AiOutlineClose onClick={handleMenu} />
            )}
          </div>

          {/* large screen */}
          <nav className="hidden md:block md:container pl-10">
          <div className="flex justify-end text-xl">
              <div className="flex text-gray-400 space-x-4">
              <Link to="/">
                  <p className=''>Home</p>
                </Link>
                {/* <Link to="projects">
                  <p className=''>Projects</p>
                </Link> */}
                <Link to="noe-talk">
                  <p className=''>Noe-Talk</p>
                </Link>
                <Link to="contact">
                  <p className=''>Contact</p>
                </Link>
               
              </div>
              {/* <div>
              <Link to="joinUs">
                  <p className=" capitalize bg-green-400 w-32 text-center rounded-md">
                    join us
                  </p>
                </Link>
              </div> */}
            </div>
          </nav>
        </nav>

        {/* mobile screen */}
        <nav className='md:hidden'>
          {menu && (
            <div className="text-xl border-t text-gray-400 mx-5">
              <div className="space-y-6 py-4 ">
              <Link to="/">
                  <p className='' onClick={handleNavLinkDisappear} >Home</p>
                </Link>
                {/* <Link to="projects">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Projects</p>
                </Link> */}
                <Link to="noe-talk">
                  <p className='mt-2' onClick={handleNavLinkDisappear}>Noe-Talk</p>
                </Link>
                <Link to="contact">
                  <p className='mt-2'onClick={handleNavLinkDisappear} >Contact</p>
                </Link>
                {/* <Link to="joinUs">
                  <p className="mt-4 capitalize bg-green-400 w-32 text-center rounded-md" onClick={handleNavLinkDisappear}>
                    join us
                  </p>
                </Link> */}
              </div>
            </div>
          )}
        </nav>
      </section>
    </div>
  )
}

export default Navbar;
