import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { generateNameId } from 'utils/helper'

function News() {
  const [news, setNews] = useState([])
  useEffect(() => {
    const fetchNews = async () => {
      const rs = await axios.get('https://617a0a2bcb1efe001700fc38.mockapi.io/api/news')
      setNews(rs.data)
    }
    fetchNews()
  }, [])
  return (
    <div className='max-w-[1200px] mx-auto bg-white my-5 py-7'>
      <div className='flex'>
        <div className='w-[75%] pl-3 pr-7 flex flex-col gap-5'>
          {news.length > 0 &&
            news.map((item, index) => (
              <Link
                to={`/tin-tuc/${generateNameId({ name: item.title, _id: item.id })}`}
                className='flex gap-4 border p-1 rounded-md'
                key={item.id}
              >
                <div className='w-40 h-40 flex-shrink-0'>
                  <img className='w-full h-full rounded-lg shadow-lg object-cover' src={item.image} alt='' />
                </div>
                <div className=''>
                  <h3 className='font-bold'>{item.title}</h3>
                  <div className='text-dots text-sm h-[62px] leading-5'>{item['sub-desc']}</div>
                </div>
              </Link>
            ))}
        </div>
        <div className='w-[25%]'></div>
      </div>
    </div>
  )
}

export default News
