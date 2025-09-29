import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
  
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c48da3bd-94c5-4160-a4e7-448c3bb966f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
    <motion.div  
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6}}
      id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
       <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{opacity:0, y:-10}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay:0.1}}
       >Connect with me</motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{opacity:0, y:-12}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.6, delay:0.2}}
      >Get in touch</motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.3}}
      >
         I'd love to hear from you! If you have any questions, comment, or feedback, please use the form below.    
        </motion.p>

        <motion.form onSubmit={onSubmit} action="" className='max-w-2xl mx-auto'
          initial={{opacity:0, y: 10}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:0.5, delay:0.2}}
        >
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

                <input type="text" placeholder='Enter your name'  required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-colors ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-gray-400 focus:ring-2 focus:ring-gray-700' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200'}`} name='name'/>

                <input type="email" placeholder='Enter your email'  required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md transition-colors ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-gray-400 focus:ring-2 focus:ring-gray-700' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200'}`} name='email'/>
            </div>

            <textarea rows='6' placeholder='Enter your message' required className={`w-full p-4 outline-none border-[0.5px] rounded-md transition-colors mb-6 ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400 border-gray-600 focus:border-gray-400 focus:ring-2 focus:ring-gray-700' : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300 focus:border-gray-700 focus:ring-2 focus:ring-gray-200'}`} name='message'></textarea>

            <motion.button type='submit' 
              whileTap={{scale: 0.97}}
              whileHover={{y: -2}}
              className={`py-3 px-8 w-max flex items-center justify-between gap-2 rounded-full mx-auto duration-500 ${isDarkMode ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-black/80 text-white hover:bg-black'}`}>Submit now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>

            <p className={`mt-4 text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{result}</p>
        </motion.form>

    </motion.div>
  )
}

export default Contact
