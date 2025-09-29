import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div className='mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6}}
    >
      <div className='text-center'>

        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>

        <motion.div className='w-max flex items-center gap-2 mx-auto'
          initial={{y: 8, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.4, delay: 0.1}}
        >
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            kuldeepkunwar16@gmail.com
        </motion.div>

      </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>

            <motion.p
              initial={{opacity: 0, y: 5}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.1}}
            >© 2025 Kuldeep Singh Kunwar. All rights reserved.</motion.p>

            <motion.ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'
              initial={{opacity: 0, y: 6}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.4, delay: 0.15}}
            >
                <li><a target='_blank' href="https://www.instagram.com/kuldeep__kunwar">Instagram</a></li>
                
                <li><a target='_blank' href="https://github.com/KuldeepKunwar03">GitHub</a></li>
                
                <li><a target='_blank' href="https://www.linkedin.com/in/kuldeepkunwar/">Linkedin</a></li>                
                
            </motion.ul>
        </div>

    </motion.div>
  )
}

export default Footer
