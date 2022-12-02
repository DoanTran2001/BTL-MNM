import React from 'react'
import { ImLocation2 } from 'react-icons/im'

function Header() {
  return (
    <div className='bg-red-600'>
      <div className='container text-white py-3'>
        <div className='flex items-center justify-between mb-1'>
          <span className='text-sm'>Thế giới thời trang nam chính hãng giá rẻ</span>
          <div className='flex gap-2'>
            <button>Đăng ký</button>
            <button>Đăng nhập</button>
            <div className='flex items-center'>
              <ImLocation2 />
              <span>Hệ thống cửa hàng</span>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='w-8 h-8'>
            <img
              className='w-full h-full object-cover'
              src='https://iweb.tatthanh.com.vn/pic/3/blog/images/merriman.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
