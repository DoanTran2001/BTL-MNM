import Footer from 'components/Footer'
import Header from 'components/Header'
import React from 'react'

function MainLayout({ children }) {
  return (
    <div className='bg-[#eff0f3]'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
