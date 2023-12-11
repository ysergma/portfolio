import React,{useEffect,useState} from 'react'
import {motion} from "framer-motion"
import "./About.scss" 
const abouts = [
  {title:'Web Development', description:'I am a good Frontend Web Developer',imgUrl:'' },
  {title:'Web Design', description:'I am a good Frontend Web Designer',imgUrl:'' },
  {title:'UI/UX ', description:'I am a good Frontend Web Developer',imgUrl:'' }
]
const About = () => {
  return (
    <>
    <h2 className='head-text'>
    I know that
    <span>Good Design</span>
    <br />
    means
    <span>Good Business</span>
    </h2>

    <div className='app__profiles'>
      {abouts.map((about,index)=>(
        <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.5, type:"tween"}}
          className='app__profile-item'
        >

        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About