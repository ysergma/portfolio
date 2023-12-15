import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const socialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/sergma/" target="_blank" rel="noopener noreferrer"> <FaLinkedin/></a>  
        </div>
        <div>
            <a href="https://github.com/ysergma" target="_blank" rel="noopener noreferrer"> <FaGithub/></a>
        </div>
        <div>
          <a href="https://www.behance.net/youssoufsergma" target="_blank" rel="noopener noreferrer"> <FaBehanceSquare/></a>  
        </div>
    </div>
  )
}

export default socialMedia