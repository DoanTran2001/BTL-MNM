import React from 'react'
import { ImLocation2 } from 'react-icons/im'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
import { useAuthenticated } from 'hooks/useAuthenticated'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { formatMoney } from 'utils/helper'
import usePop from 'hooks/usePop'
import { logout } from 'redux/AuthSlice'

function Header() {
  const auth = useAuthenticated()
  const dispatch = useDispatch()
  const { show: cart, showPop: showCart, hidePop: hideCart } = usePop()
  const { show: userPop, showPop: showUserPop, hidePop: hideUserPop } = usePop()
  const user = useSelector((state) => state.auth.profileTTN?.email)
  const purchases = useSelector((state) => state.cart.purchases)
  console.log(purchases)
  const handleLogout = () => dispatch(logout())
  return (
    <div className='bg-red-600'>
      <div className='container text-white py-3'>
        <div className='flex items-center justify-between mb-1'>
          <span className='text-sm'>Thế giới thời trang nam chính hãng giá rẻ</span>
          <div className='flex gap-2'>
            {auth && (
              <div className='relative' onMouseEnter={showUserPop} onMouseLeave={hideUserPop}>
                <span>{user}</span>
                {userPop && (
                  <div className='absolute top-full right-0 z-10 w-[200px]'>
                    <div className=' bg-white text-black px-3 py-2 rounded-lg'>
                      <div className='text-sm cursor-pointer' onClick={handleLogout}>
                        Đăng xuất
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!auth && (
              <>
                <Link to='/register'>Đăng ký</Link>
                <Link to='/login'>Đăng nhập</Link>
              </>
            )}
            <div className='flex items-center'>
              <ImLocation2 />
              <span>Hệ thống cửa hàng</span>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='w-8 h-8'>
            <img
              className='w-full h-full object-cover'
              src='https://iweb.tatthanh.com.vn/pic/3/blog/images/merriman.jpg'
              alt=''
            />
          </div>
          <div className='w-96 h-10 relative'>
            <input type='text' className='w-full h-full p-1 text-black outline-none' placeholder='Tìm kiếm sản phẩm' />
            <button className='flex items-center justify-center absolute top-2/4 right-1 -translate-y-2/4 bg-red-600 w-14 h-8'>
              <AiOutlineSearch className='text-lg' />
            </button>
          </div>
          <div className='flex flex-col gap-0 leading-none'>
            <p>
              Gọi đặt hàng <span className='font-medium text-base'>0677878234</span>
            </p>
            <p>
              Gọi tư vấn <span className='font-medium text-base'>07348762342</span>
            </p>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-white' : '')}>
              Trang chủ
            </NavLink>
            <NavLink to='/gioi-thieu' className={({ isActive }) => (isActive ? 'border-b-2 border-white' : '')}>
              Giới thiệu
            </NavLink>
            <NavLink to='/san-pham' className={({ isActive }) => (isActive ? 'border-b-2 border-white' : '')}>
              Sản phẩm
            </NavLink>
            <NavLink to='/tin-tuc' className={({ isActive }) => (isActive ? 'border-b-2 border-white' : '')}>
              Tin tức
            </NavLink>
            <NavLink to='/lien-he' className={({ isActive }) => (isActive ? 'border-b-2 border-white' : '')}>
              Liên hệ
            </NavLink>
          </div>
          <div className='relative' onMouseEnter={showCart} onMouseLeave={hideCart}>
            <Link to='/cart' className='flex items-center justify-center relative'>
              <span>Giỏ hàng</span>
              <button
                type='button'
                className='inline-flex relative items-center p-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <AiOutlineShoppingCart className='text-lg' />
                {auth && (
                  <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900'>
                    {purchases.length}
                  </div>
                )}
              </button>
              {/* <span className='absolute -top-[25px] -right-[20px] font-medium w-10 h-10 flex items-center justify-center z-10 text-xl'>
                0
              </span> */}
            </Link>
            {cart && (
              <div className='absolute top-full right-0 z-10 bg-white text-gray-500 max-w-[350px] px-3 py-2 rounded-lg shadow-lg overflow-hidden'>
                {purchases.length > 0 && (
                  <div className=''>
                    {purchases.map((item) => (
                      <div key={item._id} className='flex items-start gap-2 mb-2 border-b border-b-gray-300'>
                        <div className='w-8 h-8 shrink-0'>
                          <img className='w-full h-full object-cover rounded-md' src={item.product.image} alt='' />
                        </div>
                        <div className='flex flex-col w-full overflow-hidden'>
                          <p className='truncate text-sm font-medium'>{item.product.name}</p>
                          <span className='text-xs'>{formatMoney(item.price)}đ</span>
                        </div>
                        <div className=' w-6 h-6 flex items-center justify-center border rounded-sm shadow-md'>
                          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 '>
                            {item.buy_count}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className='mt-3 flex justify-between items-center'>
                      <button
                        type='button'
                        className='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                      >
                        Tổng
                      </button>
                      <span className='font-medium text-lg text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                        {formatMoney(
                          purchases.reduce((prev, next) => {
                            return prev + Number(next.price) * Number(next.buy_count)
                          }, 0)
                        ) + ' đ'}
                      </span>
                    </div>
                  </div>
                )}
                {purchases.length <= 0 && (
                  <div className='flex items-start gap-2 mb-2 border-b border-b-gray-300 w-full'>Không có gì</div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
