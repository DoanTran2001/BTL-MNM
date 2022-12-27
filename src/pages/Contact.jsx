import React from 'react'

function Contact() {
  return (
    <div className='max-w-[1200px] mx-auto bg-white my-5 py-7'>
      <div className='flex'>
        <div className='w-2/4 pl-3 pr-7'>
          <h2 className='font-medium text-xl'>Liên hệ với chúng tôi</h2>
          <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-3'>
              <img
                width='18'
                height='27'
                src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-1.png'
                data-src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-1.png'
                class='attachment-medium size-medium lazy-load-active'
                alt=''
                loading='lazy'
              />
              <div className=''>
                <p>
                  <strong>Trụ sở chính: </strong>Đức Thọ - Hà Tĩnh
                </p>
                <p>
                  <strong>Chi nhánh: </strong>Nam Từ Liêm, Hà Nội
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <img
                width='18'
                height='26'
                src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-2.png'
                data-src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-2.png'
                class='attachment-medium size-medium lazy-load-active'
                alt=''
                loading='lazy'
              />
              <div className=''>
                <p>
                  <strong>Hotline: </strong>0374402425
                </p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <img
                width='25'
                height='15'
                src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-3.png'
                data-src='http://shop2.giaodienwebmau.com/wp-content/uploads/2018/08/icon-lienhe-3.png'
                class='attachment-medium size-medium lazy-load-active'
                alt=''
                loading='lazy'
              />
              <div className=''>
                <p>
                  <strong>Email: </strong>doantran@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-2/4 pl-7 pr-3 flex flex-col gap-3'>
          <input
            className='px-2 py-1 outline-none border border-gray-300 rounded-md text-sm w-2/4 focus:border-gray-500 focus:shadow-md transition-all'
            type='text'
            placeholder='Họ và tên'
          />
          <input
            className='px-2 py-1 outline-none border border-gray-300 rounded-md text-sm w-2/4 focus:border-gray-500 focus:shadow-md transition-all'
            type='text'
            placeholder='Địa chỉ email'
          />
          <input
            className='px-2 py-1 outline-none border border-gray-300 rounded-md text-sm w-2/4 focus:border-gray-500 focus:shadow-md transition-all'
            type='text'
            placeholder='Số điện thoại'
          />
          <textarea
            className='px-2 py-1 outline-none border border-gray-300 rounded-md text-sm w-2/4 focus:border-gray-500 focus:shadow-md transition-all'
            type='text'
            placeholder='Nội dung'
          />
          <button
            type='button'
            class='w-2/4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 outline-none'
          >
            Gửi liên hệ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
