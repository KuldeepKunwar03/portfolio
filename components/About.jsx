import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

       <div className='flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20 mt-8 lg:mt-10 mb-16 lg:mb-20'>

        <div className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-sm ring-1 ring-gray-200 dark:ring-white/10 max-w-none'>
          <Image src={assets.user_image} alt="user"
          className="w-full rounded-3xl object-cover"/>
        </div>

        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-Ovo'>
              I'm a Full Stack AI Engineer passionate about building intelligent, scalable, and impactful applications that bridge the gap between modern web development and Artificial Intelligence. I specialize in developing end-to-end solutions using React.js, Next.js, Node.js, and Python, while leveraging Generative AI, LLMs, RAG, LangChain, and LangGraph to create AI-powered applications and intelligent agents. With a strong foundation in Data Structures, Algorithms, and System Design, I enjoy transforming complex ideas into practical products, exploring emerging technologies, and engineering solutions that solve real-world problems.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
              {infoList.map(({icon, iconDark, title, description}, index) => (

                <li className="group rounded-xl p-6 cursor-pointer transition duration-300 border border-gray-200 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 bg-white/60 backdrop-blur-sm dark:bg-gray-900/40 dark:hover:bg-gray-900/60"
                key={index}>

                  <Image src={isDarkMode && iconDark ? iconDark : icon} alt={title} className='w-7 mt-3' />

                  <h3 className='my-3 font-semibold text-gray-800 dark:text-white'>{title}</h3>

                  <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>{description}</p>

                </li>

              ))}
            </ul>

            <h4 className={`my-6 ${isDarkMode ? "text-white" : "text-black"}`}> Tools I use </h4>


            <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
              {toolsData.map((tool,index) => (
                <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-200 dark:border-white/10 rounded-lg cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-md bg-white/60 backdrop-blur-sm dark:bg-gray-900/40'>
                  <Image src={tool} alt='Tool' className={`w-5 sm:w-7 ${isDarkMode ? 'invert' : ''}`}/>
                </li>
              ) )}
            </ul>
        </div>

      </div>

    </motion.div>
  )
}

export default About
