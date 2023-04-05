import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Category from './Category';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Receipt from './Receipt';
function NavLinks() {
  return (
    <div>
      <Routes>
        <Route path='/'  element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/category/:name' element = {<Category />} />
        <Route  path='/meal/:id' element = {<Receipt />} />
      </Routes>
    </div>
  )
}

export default NavLinks;