import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <section className='body'>
        <Header />
        {children}
        <Footer />
    </section>
  )
}

export default Layout