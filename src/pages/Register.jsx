import Input from 'components/Input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from 'redux/AuthSlice'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { unwrapResult } from '@reduxjs/toolkit'

const schema = yup.object({
  email: yup.string().email('Địa chỉ email không đúng định dạng').required('Email không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Password must be at least 8 character, at least 1 letter, 1 number and 1 special character'
  // ),
  confirm_password: yup
    .string()
    .required('Nhập lại mật khẩu không được để trống')
    .oneOf([yup.ref('password'), null], 'Nhập lại mật khẩu không đúng')
})

function Register() {
  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmitForm = async (values) => {
    const body = {
      email: values.email,
      password: values.password
    }
    console.log(body)
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      toast.success('Đăng ký tài khoản thành công')
      navigate('/')
    } catch (error) {
      console.log(error)
      if (error.status === 422) {
        for (const key in error.data) {
          setError(key, {
            type: 'server',
            message: error.data[key]
          })
        }
      }
    }
  }
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit(onSubmitForm)}>
              <Input control={control} placeholder='Email' name='email' error={errors} />
              <Input control={control} placeholder='Password' type='password' name='password' error={errors} />
              <Input
                control={control}
                placeholder='Confirm password'
                type='password'
                name='confirm_password'
                error={errors}
              />
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    aria-describedby='terms'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required=''
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='terms' className='font-light text-gray-500 dark:text-gray-300'>
                    I accept the{' '}
                    <Link className='font-medium text-primary-600 hover:underline dark:text-primary-500' to='#'>
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 '
              >
                Create an account
              </button>

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <Link to='/login' className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
