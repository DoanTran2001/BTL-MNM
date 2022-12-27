import { useAuthenticated } from 'hooks/useAuthenticated'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unauthorize } from 'redux/AuthSlice'
import { getCartPurchases } from 'redux/CartSlice'

function Authorization() {
  const status = useSelector((state) => state.app.status)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const authenticated = useAuthenticated()
  useEffect(() => {
    if (status === 401) {
      dispatch(unauthorize())
      navigate('/login')
    }
  }, [dispatch, navigate, status])
  useEffect(() => {
    if (authenticated) {
      dispatch(getCartPurchases())
    }
  }, [authenticated, dispatch])
  return null
}

export default Authorization
