import { unwrapResult } from '@reduxjs/toolkit'
import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getCartPurchases } from 'redux/CartSlice'
import { addToCart } from 'redux/ProductDetailSlice'
import { formatMoney, generateNameId } from 'utils/helper'

function ProductItem(props) {
  const { dir, product } = props
  const dispatch = useDispatch()
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
    // <Link
    //   to={`san-pham/${generateNameId(product)}`}
    //   className={classNames('flex gap-2  group transition-all', { 'flex-col': dir })}
    // >
    <div className={classNames('flex gap-2  group transition-all', { 'flex-col': dir })}>
      <div
        className={classNames(
          ' rounded-lg overflow-hidden h-[128px] shrink-0',
          { 'w-full': dir },
          { 'h-[200px]': dir }
        )}
      >
        <img className='w-full h-full object-cover group-hover:scale-110 transition-all' src={product.image} alt='' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-sm '>{product.name}</p>
        <span>{product.rating} sao</span>
        <div className='flex items-center gap-2'>
          <span className='line-through text-xs'>{formatMoney(product.price)}đ</span>
          <span className='text-[#ff5622] font-medium text-lg'>{formatMoney(product.price_before_discount)}đ</span>
        </div>
        <button
          className='bg-[#ff5622] text-white rounded-xl h-10 flex items-center justify-center max-w-[150px]'
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
    // </Link>
  )
}

export default ProductItem
