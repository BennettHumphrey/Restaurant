import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './components/nav'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import MenuHeader from './components/MenuHeader'
import Images from './components/Images'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav  />
      <Header  />
      <AboutUs  />
      <MenuHeader  />
      <Menu  />
      <Images  />
      <Footer  />
    </div>
  )
}

export default App
