import { unwrapResult } from '@reduxjs/toolkit'
import classNames from 'classnames'
import SearchItemResult from 'components/SearchItemResult'
import Vouchers from 'components/Vouchers'
import React, { useState } from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useSearchParams } from 'react-router-dom'
import { getCategories, getProducts } from 'redux/HomeSlice'

function Product() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({
    products: [],
    pagination: {}
  })
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch()
  const [search] = useSearchParams()
  const searchParams = useMemo(() => Object.fromEntries([...search]), [search])
  console.log(searchParams)
  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((res) => setCategories(res.data))
  }, [dispatch])

  useEffect(() => {
    const _filters = {
      ...searchParams,
      page: searchParams.page || 1,
      limit: searchParams.limit || 30,
      sortBy: searchParams.sortBy || 'view'
    }
    setFilters(_filters)
    const params = {
      page: _filters.page,
      limit: _filters.limit,
      category: _filters.category,
      exclude: _filters.exclude,
      rating_filter: _filters.rating,
      price_max: _filters.maxPrice,
      price_min: _filters.minPrice,
      sort_by: _filters.sortBy,
      order: _filters.order,
      name: _filters.name
    }
    const _getProducts = async () => {
      const data = await dispatch(getProducts({ params }))
      const res = unwrapResult(data)
      setProducts(res.data)
    }
    _getProducts()
  }, [dispatch, searchParams])
  return (
    <div className='max-w-[1200px] mx-auto bg-white my-5 py-7'>
      <Vouchers />
      <div className='mt-5 px-5'>
        <div className='flex '>
          <div className='w-[20%]'>
            <h2 className='mb-4 text-lg font-extrabold text-gray-900 dark:text-white'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
                Tất cả danh mục
              </span>{' '}
            </h2>
            <ul className='flex flex-col gap-3'>
              {categories.map((cate) => (
                <li key={cate._id}>
                  <NavLink
                    to={`?category=${cate._id}`}
                    className={classNames({
                      'border-b-2 border-red-500 text-red-500 font-medium': searchParams.category === cate._id
                    })}
                  >
                    {cate.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <SearchItemResult products={products} filters={filters} />
        </div>
      </div>
    </div>
  )
}

export default Product
