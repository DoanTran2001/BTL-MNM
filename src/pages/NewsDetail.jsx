import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getIdFromNameId } from 'utils/helper'

function NewsDetail() {
  const { id } = useParams()
  const [item, setItem] = useState({})
  useEffect(() => {
    const fetchNewsItem = async () => {
      const idNew = getIdFromNameId(id)
      const rs = await axios.get(`https://617a0a2bcb1efe001700fc38.mockapi.io/api/news/${idNew}`)
      setItem(rs.data)
    }
    fetchNewsItem()
  }, [id])
  return (
    <div className='max-w-[1200px] mx-auto bg-white my-5 py-7'>
      <div className='flex'>
        <div className='w-[75%] pl-3 pr-7 flex flex-col gap-5'>
          <h1 className='font-bold text-3xl'>{item.title}</h1>
          <div
            className=''
            dangerouslySetInnerHTML={{
              __html: item?.description
            }}
          ></div>
        </div>
        <div className='w-[25%]'></div>
      </div>
    </div>
  )
}

export default NewsDetail
