import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart'
import { MemoizeLayout } from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { sendCartData, fetchCartData } from './store/cart-actions'

let isInitial = true

function App() {
  const dispatch = useDispatch()
  //useSelector sets up a subscription to Redux.
  //Whenever our Redux store does change this component function will be re-executed and get the latest snapshot.
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cart = useSelector((state) => state.cart)
  console.log(showCart)
  console.log(cart)
  const notification = useSelector((state) => state.ui.notification)

  //whenever the cart item is changed, the useEffect will be always triggered.
  useEffect(() => {
    if (isInitial) {
      isInitial = false
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  // how do we prevent child component to be rendered whenever we get updated data throug useSelector
  return (
    <Fragment>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <MemoizeLayout>
        {showCart && <Cart />}
        <Products />
      </MemoizeLayout>
    </Fragment>
  )
}

export default App
