import React from 'react'
import { toast } from 'react-toastify'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const vouchersData = [
  {
    content: 'Giảm 30k cho đơn hàng từ 299k',
    code: 'CM30KDSA',
    progress: '30%',
    title: 'Còn lại 129, HSD: 15.12.2022'
  },
  {
    content: 'Giảm 50k cho đơn hàng từ 499k',
    code: 'CM50KGAH',
    progress: '50%',
    title: 'Còn lại 242, HSD: 15.12.2022'
  },
  {
    content: 'Giảm 100k cho đơn hàng từ 699k',
    code: 'CMHAU100',
    progress: '60%',
    title: 'Còn lại 126, HSD: 15.12.2022'
  }
]

function Vouchers() {
  return (
    <div className='grid grid-cols-3 gap-10 px-5'>
      {vouchersData.map((voucher) => (
        <VoucherItem key={voucher.content} voucher={voucher} />
      ))}
    </div>
  )
}
const handleClick = (code) => {
  toast.success(`Đã lưu mã ${code} thành công!`)
}
function VoucherItem({ voucher }) {
  return (
    <div className='flex relative bg-cover bg-[url("https://mcdn.coolmate.me/image/August2022/mceclip1_15.png")] bg-[50%] bg-no-repeat h-[130px] drop-shadow-[2px_5px_4px_#0003]'>
      <div className='flex flex-col gap-3 text-sm justify-center pr-[3%] pl-[9%]'>
        <p className='font-medium'>{voucher.content}</p>
        <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
          <div
            className='bg-yellow-400 h-2.5 rounded-full'
            id={`${voucher.progress}`}
            data-tooltip-content={`${voucher.progress}`}
            style={{ width: `${voucher.progress}` }}
          ></div>
          <ReactTooltip anchorId={`${voucher.progress}`} />
        </div>
        <span className='text-gray-400'>{voucher.title}</span>
      </div>
      <div className='flex flex-col pr[4%] items-center basis-[32%] justify-center'>
        <button
          className='py-1 px-3 rounded-[3px] bg-yellow-400 font-semibold mb-2'
          onClick={() => handleClick(voucher.code)}
        >
          Lưu mã
        </button>
        <div className='text-sm font-bold text-[#2f5acf]'>{voucher.code}</div>
      </div>
    </div>
  )
}

export default Vouchers
