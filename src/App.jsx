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
  const [count, setCount] = useState(0)

 useEffect(() => {
  console.log(`window scroll ${window.scrollY}`)
 }, [window.scrollY])

 useEffect(() => {
  const handleScroll = () => {
    console.log('event scroll')
  };
  
  addEventListener("scroll", handleScroll);
  return () => removeEventListener("scroll", handleScroll);
}, []);

  return (
      <div onScroll={() => console.log('scroll home')} className='bg-red-500 relative h-[2000px] overflow-y-scroll' id='home' >
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
