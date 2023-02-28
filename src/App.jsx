import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import MenuHeader from './components/MenuHeader'
import Images from './components/Images'
import Footer from './components/Footer'
import ContactHeader from './components/ContactHeader'
import Contact from './components/Contact'

function App() {

 useEffect(() => {
  console.log(`window scroll ${window.scrollY}`)
 }, [window.scrollY]);

 useEffect(() => {
  
  document.body.scrollTop > 100 && console.log('scrollTop')
 }, [document.body.scrollTop])

 useEffect(() => {
  const handleScroll = () => {
    console.log('effect scroll')
  };
  
  addEventListener("scroll", handleScroll);
  return () => removeEventListener("scroll", handleScroll);
}, []);

  return (
      <div 
      onClick={() => {
        console.log('test click')
      }}
      onTouchMove={() => {
        console.log('touchMove')
      }}

      //Found a way around using onScroll for the purposes I want, but
      //I still want to figure out the root of the problem
      
      onWheel={() => {
        console.log('onWheel')
        console.log(`onWheel scrollTop ${document.body.scrollTop}`)
        console.log(`onWheel scrollY ${window.scrollY}`)
        setTimeout(() => {console.log(`onWheel scrollTop delay ${document.body.scrollTop}`)}, 500)
      }}
      onWheelCapture={() => {
        console.log('onWheelCapture')
      }}

      //The offending section, onScroll never triggers

      onScrollCapture={() => {
        console.log('onScrollCapture')
      }} 
      onScroll={() => {
        console.log('onScroll')
      }} 
      className='bg-red-500 relative h-[2000px] overflow-y-auto z-0' id='home' >
        <Nav  />
        <Header  />
        {/* <AboutUs  /> */}
        {/* <MenuHeader  /> */}
        {/* <Menu  /> */}
        {/* <Images  /> */}
        {/* <ContactHeader  /> */}
        {/* <Contact  /> */}
        {/* <Footer  /> */}
      </div>
  )
}

export default App
