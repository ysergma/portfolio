import React,{useState} from 'react'
import { images } from '../../constants'
import {HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion} from 'framer-motion'
import {HashLink} from 'react-router-hash-link'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
           <a href="/"><img src={images.logo} alt="logo" /></a> 
        </div>
        <ul className='app__navbar-links'>
            {['Home','About','Skills','Work','Contact'].map((item)=>(
              <li key={`link-${item}`} className='app__flex p-text'>
                 <div/>
                 <HashLink to={`#${item}`}>
                 <a href={`#${item}`}>{item}</a>
                 </HashLink>
                </li>
            ))}
        </ul>
        <div>
           <a href="https://archive.org/download/youssouf-sergma-cv/Youssouf%20Sergma%20CV.pdf" target="_blank" rel="noopener noreferrer"><button className='cv__button'>Download My Resume</button></a>
        </div>
        {/* Mobile navbar */}
        <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>
        {toggle && (
          <motion.div
          whileInView={{x:[300,0]}}
          transition={{duration:0.85, ease:'easeOut'}}
          >
             <HiX onClick={() => setToggle(false)} />
             <ul>
            {['Home','About','Skills','Work','Contact'].map((item)=>(
              <li key={item} >
                 <HashLink to={`#${item}`}>
                 <a href={`#${item}`} onClick={()=>setToggle(false)}>{item}</a>
                 </HashLink>
                </li>
            ))}
            </ul>
          </motion.div>
        )}

        </div>
    </nav>
  )
}

export default Navbar