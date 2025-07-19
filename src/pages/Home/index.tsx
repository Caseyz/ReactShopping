import {useEffect, useState} from 'react'
import { Trans } from 'react-i18next'
import {
  Container,
  Switch,
  Stack,
  Skeleton,
  Image,
  Button,
  NumberInput,
  NumberInputField,
  FormControl,
} from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import Moon from '@/assets/moon.svg'
import Sun from '@/assets/sun.svg'
import Cart from '@/assets/add-cart.svg'
import Global from '@/assets/global.svg'
import ImageFallBack from '@/assets/150.png'
import i18n from '@/i18n'
import { moneyFormat } from '@/utils'
import {
  CartInfo,
  setCartLists
} from '@/store/cart'
import CartPage from '@/components/Cart'
import useSessionData from './useSessionData'
import './index.scss'

enum LightMode {
  Moon,
  Sun
}

const HomePage = () => {
  // switch button
  const [lightMode, setLightMode] = useState<LightMode>(LightMode.Sun)
  const onSwitchChange = () => {
    const model = lightMode === LightMode.Sun ? LightMode.Moon : LightMode.Sun
    setLightMode(model)
  }

  // i18n language
  const lang = i18n.language
  const switchLang = () => i18n.changeLanguage(lang === 'cn' ? 'en' : 'cn')

  // fetch session data
  const {
    sessionData,
    loadingData,
    setSessionData
  } = useSessionData()

  // form action
  const onNumberChange = (index, number) => {
    // @ts-ignore
    sessionData.sessionLists[index].quantity = number
    // @ts-ignore
    setSessionData({...sessionData})
  }

  // cart store
  const totalPrice = useSelector<{cartInfo: CartInfo}>(state => state.cartInfo.totalPrice) as number
  const dispatch = useDispatch()
  const onAddCart = (i, index) => {
    dispatch(setCartLists({
      ...i,
      quantity: i.quantity,
    }))
    setIsOpenCart(true)
  }

  // cart page
  const [isOpenCart, setIsOpenCart] = useState(false)
  const onCartClose = () => setIsOpenCart(false)

  return (
    <div className='home-page'>
      <div className='page-header'>
        <div className='title'><Trans>homePage.title</Trans></div>
        <div className='main-content'>
          <Switch onChange={onSwitchChange}></Switch>
          <img className='light-logo ml-8' src={ lightMode === LightMode.Sun ? Sun : Moon } />
          <img className='global-logo ml-8' src={Global} onClick={switchLang} />
          <span className='ml-8' onClick={switchLang}>{lang}</span>

          <div className='cart-box' onClick={() => setIsOpenCart(true)}>
            <img className='cart-logo ml-12' src={Cart} />
            <span className='ml-6'>{sessionData?.currencySymbol} {moneyFormat(totalPrice)}</span>
          </div>
        </div>
      </div>

      {
        !loadingData ? sessionData?.sessionLists.map((i, k) => (
          <Container maxW='1080px' className='product-box mt-40' key={k}>
            <div className='product-content'>
              <div className='product-name'>{i.productName}</div>
              <div className='description mt-12'>{i.description}</div>

              <div className='price-box mt-20'>
                <div className='quantity'><Trans>homePage.quantity</Trans></div>
                <FormControl>
                  <NumberInput
                    value={i.quantity}
                    onChange={(n) => onNumberChange(k, n)}
                    className='mt-8'
                    defaultValue={1}
                    max={i.inventory}
                    min={1}>
                    <NumberInputField width='auto' />
                  </NumberInput>
                </FormControl>

                <p className='action-box mt-20'>
                  <span>{sessionData?.currencySymbol}</span>
                  <span>{moneyFormat(i.price/sessionData?.unit)}</span>
                  <Button className='ml-12' colorScheme='blue' onClick={() => onAddCart(i, k)}>
                    <Trans>homePage.addToCart</Trans>
                  </Button>
                </p>
              </div>
            </div>
            <Image
              fallbackSrc={ImageFallBack}
              boxSize='40%'
              objectFit='cover'
              className='cover'
              src={i.cover}
              alt='cover'>
            </Image>
          </Container>
        )) : (
          <>
            <Stack className='mt-40' style={{padding: '20px'}}>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
            <Stack className='mt-40' style={{padding: '20px'}}>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
          </>
        )
      }

      <CartPage isOpen={isOpenCart} onClose={onCartClose} />
    </div>
  )
}

export default HomePage