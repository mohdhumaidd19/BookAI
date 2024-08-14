import React from 'react'
//import back from './components/back.jsx'
import Main from './components/Main.jsx'
import Navbar from './components/Navbar.jsx'
import StoryCard from './components/StoryCard.jsx'
import Footer from './components/Footer.jsx'
import TransparentCards from './components/TransparentCards.jsx'
const App = () => {
  return (
   <div>
       
      <Navbar/>
      <Main/>
      <StoryCard/>
      <TransparentCards/>
        <Footer/>   
    </div>
    
  )
}

export default App
