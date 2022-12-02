import Footer from 'components/Footer'
import Header from 'components/Header'
import MainLayout from 'layouts/MainLayout'
import Contact from 'pages/Contact'
import Home from 'pages/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      {/* <Header /> */}
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path='/contact'
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
