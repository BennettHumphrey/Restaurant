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

  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (document.body.scrollTop > 90) {
      console.log('handleScroll true')
      return setScrolled(true);
    }
    console.log('handleScroll false')
    return setScrolled(false)
  }

  return (
      <div 
      onTouchMove={() => {
        // console.log('touchMove');
        setTimeout(() => {handleScroll()}, 500);
      }}

      onWheel={() => {
        // console.log('onWheel');
        setTimeout(() => {handleScroll()}, 500)
      }}

      className='bg-red-500 relative overflow-y-auto z-0' id='home' >
        <Nav scrolled={scrolled} />
        <Header  />
        <AboutUs  />
        <MenuHeader  />
        <Menu  />
        <Images  />
        <ContactHeader  />
        <Contact  />
        <Footer  />
      </div>
  )
}

export default App
