import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Thumbs, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import SliderItem from './SliderItem'

const dataSlider = [
  {
    id: 1,
    image:
      'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2022/marvelDesktop.jpg'
  },
  {
    id: 2,
    image: 'https://media.coolmate.me/cdn-cgi/image/width=1920…uto/uploads/October2022/Hero-BST-Dong-ppp_21.jpeg'
  },
  {
    id: 3,
    image:
      'https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/November2022/Banner-Coolmate-Active-opt-1s.jpg'
  },
  {
    id: 4,
    image: 'https://fashionminhthu.com.vn/wp-content/uploads/2020/09/cach-phoi-do-voi-ao-so-mi-trang-1.jpg'
  },
  {
    id: 5,
    image: 'https://suachualaptop24h.com/upload_images/images/2022/11/23/Thu-sau-den-toi-chot-deal-quen-loi.jpg'
  }
]

function Slider() {
  return (
    <div className=''>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        autoplay={true}
        loop={true}
        modules={[Navigation, Autoplay, Thumbs, FreeMode]}
      >
        {dataSlider.map((item) => (
          <SwiperSlide key={item.id}>
            <SliderItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
