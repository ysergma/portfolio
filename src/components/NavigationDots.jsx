import React from 'react'
import {HashLink} from 'react-router-hash-link'


const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
             <ul>
            {['Home','About','Skills','Work','Testimonials','Contact'].map((item,index)=>(
                <HashLink to={`#${item}`}>
                <li>
                 <a 
                 href={`#${item}`} 
                 key={item+index}
                 className='app__navigation-dot'
                 style={active===item ? {backgroundColor:"#313BAC"} : {}}
                 />
                  </li>
                  </HashLink>
            ))}
            </ul>
    </div>
  )
}

export default NavigationDots