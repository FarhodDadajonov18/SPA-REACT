import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer-copyright foot">
      <div className="container">
       © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </>
  ) 
}

export default Footer;