import React from 'react'

const Footer = () => {
   const year = new Date().getFullYear(); 
  return (
    <div>
      copyright &copy; {year}
    </div>
  )
}

export default Footer
