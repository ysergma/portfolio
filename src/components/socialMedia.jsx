import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

const socialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaLinkedin/>
        </div>
        <div>
            <FaGithub/>
        </div>
        <div>
            <FaBehanceSquare/>
        </div>
    </div>
  )
}

export default socialMedia