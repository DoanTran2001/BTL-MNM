import React from 'react'

function SliderItem({ item }) {
  return (
    <div className='w-full h-[70vh] relative rounded-lg overflow-hidden'>
      <div className=' w-full h-full '>
        <img className='object-cover w-full h-full ' src={item.image} alt='' />
      </div>
      <div className='absolute bottom-8 left-2/4 -translate-x-2/4 w-full '>
        <div className='flex w-full items-center justify-between gap-10'>
          <div className='flex flex-col bg-yellow-100 px-5 py-1 rounded-full text-sm shadow-lg w-full items-center hover:shadow-xl font-medium'>
            <span>Miễn phí vận chuyển</span>
            <span>cho đơn trên 200</span>
          </div>
          <div className='flex flex-col bg-yellow-100 px-5 py-1 rounded-full text-sm shadow-lg w-full items-center hover:shadow-xl font-medium'>
            <span>15 ngày đổi trả</span>
            <span>vì bất kì lý do gì</span>
          </div>
          <div className='flex flex-col bg-yellow-100 px-5 py-1 rounded-full text-sm shadow-lg w-full items-center hover:shadow-xl font-medium'>
            <span>Đến tận nơi nhận hàng trả</span>
            <span>hoàn tiền trong 24h</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderItem
