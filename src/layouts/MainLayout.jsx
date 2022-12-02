import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

function MainLayout({ children }) {
  return (
    <div className=''>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
