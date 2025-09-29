import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Work = ({ isDarkMode }) => {
  return (
    <motion.div 
    initial={{opacity:0, y: 20}}
    whileInView={{opacity:1, y: 0}}
    transition={{duration: 0.6}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{opacity:0, y: -10}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.5, delay: 0.1}}
      >My portfolio</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{opacity:0, y: -12}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.6, delay: 0.2}}
      >My latest work</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 0.6, delay: 0.3}}
      >
             Showcasing projects that highlight my skills in web development and UI/UX design, built with modern tools and a focus on clean, user-friendly experiences.
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-10 gap-5 dark:text-black'>
            {workData.map((project, index) => (
                <motion.a 
                initial={{opacity:0, scale: 0.98}}
                whileInView={{opacity:1, scale: 1}}
                transition={{duration: 0.4, delay: index * 0.1}}
                viewport={{ once: true }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
                key={index} style={{backgroundImage: `url(${project.bgImage})`}}>

                    <motion.div 
                      initial={{y: 12, opacity: 0}}
                      whileInView={{y: 0, opacity: 1}}
                      transition={{duration: 0.4, delay: 0.15}}
                      className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>

                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                            <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                        </div>
                    </motion.div>

                </motion.a>
            ))}
        </div>

        <motion.a 
        initial={{opacity:0, y: 10}}
        whileInView={{opacity:1, y: 0}}
        transition={{duration: 0.4, delay: 0.2}}
        href="https://github.com/KuldeepKunwar03" className={`w-max flex items-center justify-center gap-2 rounded-full py-3 px-10 mx-auto my-20 duration-500 ${
            isDarkMode 
                ? 'text-white border-[0.5px] border-white hover:bg-gray-800' 
                : 'text-black border-[0.5px] border-black hover:bg-[#ffd6ff]'
        }`}>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4'/>
        </motion.a>

    </motion.div>
  )
}

export default Work
