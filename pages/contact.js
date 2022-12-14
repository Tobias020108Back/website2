import Head from 'next/head'
import React from 'react'
import { motion } from 'framer-motion'
const ContactArr = [
    {
        "title": "Email",
        "description": "Alex_1920@gmx.de",
        "link": "mailto:Alex_1920@gmx.de",
        "image": "https://media.discordapp.net/attachments/1010317509150396581/1013454195627663441/envelope-solid.png"
    },
    {
        "title": "Github",
        "description": "Tobias020108Back",
        "link": "https://github.com/Tobias020108Back",
        "image": "https://media.discordapp.net/attachments/1010317509150396581/1014563771701800970/unknown.png"
    },
    {
        "title": "Discord",
        "description": "Tobias020108Back#1234",
        "link": "https://discord.com/users/810711650226667540",
        "image": "https://media.discordapp.net/attachments/1039571093842821132/1052240742480891904/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
    },
    {
        "title": "Telegram",
        "description": "Tobias020108",
        "link": "https://t.me/Tobias020108",
        "image": "https://media.discordapp.net/attachments/1039571093842821132/1052240928821235792/512px-Telegram_logo.png"
    }
];

export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Head>
                <title>Tobias - Contact</title>
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
            <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.5 }} className='custom-margin-body mt-12 p-5'>
                <h1 className="text-3xl font-normal mb-5 text-gray-200 md:text-5xl">Contact Information</h1>
                <p className="text-xl mt-2 text-gray-200">If you wish to hire/contact me you can do so by using those contact informations.</p>
                <motion.div initial={{ opacity: 0, y: 180 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", duration: 0.7 }} className="flex flex-col gap-5 mt-28">
                    {ContactArr.map((contact, index) => (
                        <div key={index} className="flex flex-col white-shadow gap-2 custom-bg p-10 w-full rounded-lg">
                            <center>
                                <img src={contact.image} className="max-w-36 md:max-w-md max-h-36 mb-5 rounded-lg" />
                                <h1 className="text-lg md:text-2xl font-bold text-gray-100 mt-5">{contact.title}</h1>
                                <a href={contact.link} className="text-lg md:text-2xl font-normal text-gray-100 pt-10">{contact.description}</a>
                            </center>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#121212" fillOpacity="1" d="M0,128L60,144C120,160,240,192,360,181.3C480,171,600,117,720,117.3C840,117,960,171,1080,197.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
            <div style={{ backgroundColor: "#121212" }} className="pb-80">

            </div>
        </div>
    )
}
