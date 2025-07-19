import { useSelector } from 'react-redux'
import {
  Button,
  Container,
  Image
} from '@chakra-ui/react'
import { Trans } from 'react-i18next'
import { UserInfoState } from '@/store/user'
import { useNavigate } from 'react-router-dom'
import { CartInfo } from '@/store/cart'
import { moneyFormat } from '@/utils'

import './index.scss'

const CheckoutPage = () => {
  // user info
  const userName = useSelector<{userInfo: {userInfo: UserInfoState}}>(state => state.userInfo.userInfo.userName) as string

  // cart data
  const {
    cartLists,
    totalPrice,
    unit,
    currencySymbol
  } = useSelector<{cartInfo: CartInfo}>(state => state.cartInfo) as CartInfo

  const navigate = useNavigate()
  const goHome = () => navigate('/')

  return (
    <Container maxW='768px' className='checkout-page'>
      <p className='user-name'>
        <Trans>checkoutPage.dear</Trans>
        <span>: {userName}</span>
      </p>
      { Array.from(cartLists.values()).map((i, k) => (
        <div className='cart-item' key={k}>
          <div className='session-item'>
            <div className='session'>
              <Image width='120px' src={i.cover} />
              <div className='desc-box ml-8'>
                <p>{i.productName}</p>
                <p className='text-ellipsis_2 description'>{i.description}</p>
              </div>
            </div>
          </div>
          <div className='quantity-box'>
            <p><Trans>cartPage.quantity</Trans>: {i.quantity}</p>
            <p className='mt-12'><Trans>cartPage.price</Trans>: {currencySymbol}{moneyFormat(i.price*i.quantity/unit)}</p>
          </div>
        </div>
      ))}

      <p className='total-price'>
        <Trans>checkoutPage.total</Trans>
        <span>: {currencySymbol}{moneyFormat(totalPrice)}</span>
      </p>

      <Button onClick={goHome} className='mt-20' width='100%' colorScheme='twitter'>
        <Trans>checkoutPage.text</Trans>
      </Button>
    </Container>
  )
}

export default CheckoutPage