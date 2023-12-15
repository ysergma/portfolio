import React from 'react'
import {About,Footer,Header,Skills,Testimonial,Work} from "./container"
import {Navbar} from './components'
import { BrowserRouter } from 'react-router-dom'
import ScrollProgressBar from 'react-scroll-progress-bar';
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
    <div className='app'>
    <ScrollProgressBar height="4px" color="#313BAC"/>
      <Navbar/> 
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App