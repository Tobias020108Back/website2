import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggle = () => setIsOpen(!isOpen)
  React.useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen]) 
  return (
    <div>
      <Head>
        <title>Tobias - Main</title>
      </Head>
      <div className='p-5 '>
        <nav className="flex custom-margin-nav custom-bg white-shadow rounded-xl items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="/" className="font-semibold text-3xl tracking-tight text-blue-500">Tobias</a>
          </div>
          <div className="block lg:hidden">
            <button onClick={toggle} className="flex items-center px-3 py-2 rounded text-gray-200  hover:text-white ">
              <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>

          <div className={`w-full block flex-grow lg:flex lg:items-center  lg:w-auto  ${isOpen ? 'block' : 'hidden'}`}>
            <div className="text-sm lg:flex-grow">
              <a href="/skills" className="transition-all text-lg hover:text-gray-400 hover:pointer rounded-lg block mt-4 lg:inline-block lg:mt-0 text-gray-100 mr-4">
                Skills
              </a>
              <a href="/contact" className="transition-all text-lg hover:text-gray-400 hover:pointer rounded-lg block mt-4 lg:inline-block lg:mt-0 text-gray-100 mr-4">
                Contact
              </a>
            </div>
          </div>

        </nav>
      </div>
      <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }}>
        <div className='custom-flex-hero custom-margin-body mt-28'>
          <div className="justify-center md:mb-0 mb-20">
            <h1 className="text-5xl font-normal mb-5 text-gray-200 md:text-6xl">Hey, I'm <span className='text-blue-500'>Tobias</span></h1>
            <h2 className="text-2xl font-thin ml-1 text-gray-200">I'm a 14 year old backend developer from Germany.</h2>
            <h2 className="text-2xl font-thin ml-1 text-gray-200">I've been using a scripting language called <a href="https://luau-lang.org/" className='text-blue-500'>LuaU</a> for around 1.4 years now.</h2>
          </div>
          <div>
            <img src="https://lanyard.cnrad.dev/api/810711650226667540"></img>
          </div>
        </div>
      </motion.div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#121212" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,117.3C840,117,960,171,1080,197.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <div style={{ backgroundColor: "#121212" }} className="pb-80">
       
      </div>
    </div>
  )
}
