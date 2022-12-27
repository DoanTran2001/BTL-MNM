import React from 'react'
import { AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'

function Footer() {
  return (
    <div className='bg-white mt-5'>
      <div className='container py-3 '>
        <div className='grid grid-cols-4 gap-5'>
          <div className='flex flex-col gap-3'>
            <strong>Giới thiệu</strong>
            <div className=''>
              <p>Về chúng tôi</p>
              <p>Quy chế sàn giao dịch</p>
              <p>Các khuyễn mãi đã bán</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <strong>Chính sách công ty</strong>
            <div className=''>
              <p>Cách thức thanh toán</p>
              <p>Chính sách bảo hành</p>
              <p>Chính sách bảo mật thông tin</p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <strong>Hotline liên hệ</strong>
            <div className=''>
              <p>
                <strong>Email: </strong>doantran@gmail.com
              </p>
              <p>
                <strong>Kết nối với chúng tôi</strong>
              </p>
              <p className='flex gap-2'>
                <BsFacebook />
                <BsInstagram />
                <AiOutlineMail />
                <BiPhoneCall />
                <AiFillLinkedin />
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <strong>Hệ thống cửa hàng</strong>
            <div className=''>
              <p>Về chúng tôi</p>
              <p>Quy chế sàn giao dịch</p>
              <p>Các khuyễn mãi đã bán</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
