import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import productApi from 'api/product.api'
import Heading from 'components/Heading'
import ProductItem from 'components/ProductItem'
import Slider from 'components/Slider'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { generateNameId } from 'utils/helper'

function Home() {
  const [soldProduct, setSoldProduct] = useState([])
  const [aoThunProduct, setAoThunProduct] = useState([])
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchSoldProduct = async () => {
      const params = { sort_by: 'sold', page: 1 }
      const res = await productApi.getProducts({ params })
      setSoldProduct(res.data.products)
    }
    const fetchProductCate = async () => {
      const params = { category: '60aba4e24efcc70f8892e1c6', page: 1 }
      const res = await productApi.getProducts({ params })
      setAoThunProduct(res.data.products)
    }
    const fetchNews = async () => {
      const rs = await axios.get('https://617a0a2bcb1efe001700fc38.mockapi.io/api/news')
      setNews(rs.data)
    }
    fetchNews()
    fetchProductCate()
    fetchSoldProduct()
  }, [])
  return (
    <div className='max-w-[1200px] mx-auto'>
      <Slider />
      <Heading>Top bán chạy hàng tuần</Heading>
      <div className='grid grid-cols-3 gap-4 mt-4 '>
        {soldProduct.length > 0 &&
          soldProduct.slice(0, 6).map((product) => (
            <Link to={`/san-pham/${generateNameId(product)}`} key={product._id}>
              <ProductItem product={product} />
            </Link>
          ))}
      </div>
      <Heading>Áo thun</Heading>
      <div className='grid grid-cols-4 gap-4 mt-4 '>
        {aoThunProduct.length > 0 &&
          aoThunProduct.slice(0, 6).map((product) => (
            <Link to={`/san-pham/${generateNameId(product)}`} key={product._id}>
              <ProductItem dir product={product} />
            </Link>
          ))}
      </div>
      <Heading>Tin tức - bài viết</Heading>
      <div className='w-72 h-80 mx-auto '>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCards, Pagination, Navigation]}
          className='my-5'
          loop={true}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/tin-tuc/${item.id}`} className='w-72 h-80 bg-red-700 inline-block rounded-lg'>
                <div className='rounded-lg overflow-hidden'>
                  <img src={item.image} className='w-full h-60 object-cover' alt='' />
                  <h3 className='text-white text-center text-lg'>{item.title}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Home
