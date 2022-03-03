import React from 'react'

const Footer = () => {
  const getDate = new Date().getFullYear
  return (
    <footer className='page-footer'>
        <p>&copy; {getDate}
         <span>SimpleRecipes</span>
         Built with<a href='https://www.gatsbyjs.com'>Gatsby</a>
        </p>
    </footer>
  )
}

export default Footer