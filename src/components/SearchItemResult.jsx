import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { generateNameId } from 'utils/helper'
import ProductItem from './ProductItem'
import classNames from 'classnames'

function SearchItemResult({ products, filters }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsResult = Object.fromEntries([...searchParams])
  const sortBy = (value) => {
    setSearchParams({ ...searchParamsResult, sortBy: value })
  }
  return (
    <div className='w-full '>
      <div className='bg-gray-400 flex p-2 mb-5 rounded-lg'>
        <button
          type='button'
          className={classNames(
            'text-black bg-white px-5 py-2.5 mr-2  font-medium rounded-lg hover:text-white hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-600 transition-all',
            { 'text-white bg-gradient-to-br from-green-400 to-blue-600': searchParamsResult?.sortBy === 'view' }
          )}
          onClick={() => sortBy('view')}
        >
          Phổ biến
        </button>
        <button
          type='button'
          className={classNames(
            'text-black bg-white px-5 py-2.5 mr-2  font-medium rounded-lg hover:text-white hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-600 transition-all',
            { 'text-white bg-gradient-to-br from-green-400 to-blue-600': searchParamsResult?.sortBy === 'createdAt' }
          )}
          onClick={() => sortBy('createdAt')}
        >
          Mới nhất
        </button>
        <button
          type='button'
          className={classNames(
            'text-black bg-white px-5 py-2.5 mr-2  font-medium rounded-lg hover:text-white hover:bg-gradient-to-br hover:from-green-400 hover:to-blue-600 transition-all',
            { 'text-white bg-gradient-to-br from-green-400 to-blue-600': searchParamsResult?.sortBy === 'sold' }
          )}
          onClick={() => sortBy('sold')}
        >
          Bán chạy
        </button>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {products.products?.map((product) => (
          <Link to={`${generateNameId(product)}`} key={product._id}>
            <ProductItem dir product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SearchItemResult
