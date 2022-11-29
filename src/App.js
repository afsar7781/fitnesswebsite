import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Custom from './Components/Custom/Custom';
import Details from './Components/details/Details';
import Teams from './Components/Teams/Teams';
import Pricing from './Components/Pricing/Pricing';
import Footer from './Components/Footer/Footer';
const App = () => {
  return (
 <>
 <Navbar/>
 <Header/>
 <Custom/>
 <Details/>
 <Teams/>
 <Pricing/>
 <Footer/>
    </>
  )
}

export default App