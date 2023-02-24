import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
  const [count, setCount] = useState(0)


  return (
    <div onScroll={() => console.log('scroll home')} className='bg-red-500 h-[2000px] overflow-y-auto' id='home' >
      <Nav  />
      {/* <Header  /> */}
      {/* <AboutUs  /> */}
      {/* <MenuHeader  /> */}
      {/* <Menu  /> */}
      {/* <Images  /> */}
      {/* <ContactHeader  /> */}
      {/* <Contact  /> */}
      <Footer  />
    </div>
  )
}

export default App
