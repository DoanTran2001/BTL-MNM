import Authorization from 'Authorization'
import Footer from 'components/Footer'
import Header from 'components/Header'
import AuthLayout from 'layouts/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import Contact from 'pages/Contact'
import Home from 'pages/Home'
import Introduce from 'pages/Introduce'
import Login from 'pages/Login'
import News from 'pages/News'
import NewsDetail from 'pages/NewsDetail'
import Product from 'pages/Product'
import ProductDetail from 'pages/ProductDetail'
import Register from 'pages/Register'
import MessengerCustomerChat from 'react-messenger-customer-chat'
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
          path='/register'
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path='/login'
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path='/lien-he'
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
        <Route
          path='/gioi-thieu'
          element={
            <MainLayout>
              <Introduce />
            </MainLayout>
          }
        />
        <Route
          path='/tin-tuc'
          element={
            <MainLayout>
              <News />
            </MainLayout>
          }
        />
        <Route
          path='/tin-tuc/:id'
          element={
            <MainLayout>
              <NewsDetail />
            </MainLayout>
          }
        />
        <Route
          path='/san-pham'
          element={
            <MainLayout>
              <Product />
            </MainLayout>
          }
        />
        <Route
          path='/san-pham/:productId'
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />
      </Routes>
      <Authorization />
      <MessengerCustomerChat pageId='100088500168234' appId='1359626344809987' />
      {/* <Footer /> */}
    </div>
  )
}

export default App
