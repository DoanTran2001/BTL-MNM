import { useState } from 'react'

function usePop() {
  const [show, setShow] = useState(false)
  const showPop = () => setShow(true)
  const hidePop = () => setShow(false)
  return { show, showPop, hidePop }
}
export default usePop
