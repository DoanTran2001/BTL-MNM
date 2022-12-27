import productApi from 'api/product.api'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { formatMoney, getIdFromNameId } from 'utils/helper'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/ProductDetailSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { getCartPurchases } from 'redux/CartSlice'

function ProductDetail() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const productSidebar = [
    {
      icon: 'http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/productdetail-icon5.png',
      title: 'Giao hàng nhanh chóng',
      desc: 'COD-Nhận hàng thanh toán'
    },
    {
      icon: '	http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/productdetail-icon4.png',
      title: 'Sản phẩm chính hãng',
      desc: 'Sản phẩm nhập khẩu 100%'
    },
    {
      icon: '	http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/productdetail-icon3.png',
      title: 'Mua hàng tiết kiệm',
      desc: 'Rẻ hơn từ 10% - 30%'
    },
    {
      icon: 'http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/productdetail-icon1.png',
      title: 'Hotline mua hàng',
      desc: '0789324567'
    }
  ]
  const { productId } = useParams()
  const [product, setProduct] = useState()
  const dispatch = useDispatch()
  useEffect(() => {
    const idProduct = getIdFromNameId(productId)
    const fetchProduct = async () => {
      const rs = await productApi.getProductDetail(idProduct)
      setProduct(rs.data)
    }
    fetchProduct()
  }, [productId])
  const handleAddToCart = async () => {
    const body = {
      product_id: product._id,
      buy_count: 1
    }
    const res = await dispatch(addToCart(body)).then(unwrapResult)
    await dispatch(getCartPurchases()).then(unwrapResult)
    toast.success(res.message, {
      position: 'top-right',
      autoClose: 3000
    })
  }
  return (
    <div className=' bg-[#eff0f3]'>
      <div className='max-w-[1200px] mx-auto bg-white my-5'>
        <div className='flex flex-row-reverse'>
          <div className='flex flex-col w-[25%] p-5 gap-7'>
            {productSidebar.map((item) => (
              <div className='flex gap-3' key={item.title}>
                <img src={item.icon} alt='' className='w-10 h-10' />
                <div className=''>
                  <p>
                    <strong>{item.title}</strong>
                  </p>
                  <span>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='border-r border-[#ececec] pl-5 w-[75%]'>
            <div className='pt-3 pb-10'>
              <div className='flex gap-3'>
                <div className='w-[40%]'>
                  <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                  >
                    {product?.images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} alt='' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={5}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className='swiperThumb'
                  >
                    {product?.images.map((item, index) => (
                      <SwiperSlide key={index}>
                        <img src={item} alt='' />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='font-bold text-xl'>{product?.name}</h1>
                  {/* <span>{product?.}</span> */}
                  <div className='flex gap-2'>
                    <span className='line-through'>{formatMoney(product?.price_before_discount)}đ</span>
                    <span className='text-xl text-red-600 font-semibold'>{formatMoney(product?.price)}đ</span>
                  </div>
                  <button
                    type='button'
                    className='text-white text-lg bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2'
                    onClick={handleAddToCart}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-5'>
          <h2 className='text-2xl underline font-bold mb-2'>Mô tả</h2>
          <div
            className=''
            dangerouslySetInnerHTML={{
              __html: product?.description
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
