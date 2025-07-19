import {
  Button,
  Drawer,
  Image,
  FormControl,
  NumberInput,
  NumberInputField,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { Trans } from 'react-i18next'
import {useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {removeCartItem, setCartLists} from '@/store/cart'
import Close from '@/assets/close.svg'
import Delete from '@/assets/delete.svg'
import { CartInfo } from '@/store/cart'
import { moneyFormat } from '@/utils'

import './index.scss'
import {UserInfoState} from "@/store/user";

const CartPage = (props) => {
  const { isOpen, onClose } = props

  // cart store
  const dispatch = useDispatch()
  const {
    cartLists,
    totalPrice,
    unit,
    currencySymbol
  } = useSelector<{cartInfo: CartInfo}>(state => state.cartInfo) as CartInfo

  const onDelSession = (id: string) => dispatch(removeCartItem(id))

  // on checkout click dialog
  const navigate = useNavigate()
  const cancelRef = useRef<any>()
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const hasLogin = useSelector<{userInfo: {userInfo: UserInfoState}}>(state => !!state.userInfo.userInfo.userId) as boolean

  const onDialogClose = () => setIsOpenDialog(false)
  const onDialogConfirm = () => {
    setIsOpenDialog(false)
    navigate(`/login?redirect=${encodeURIComponent('/checkout')}`)
  }
  const onCheckoutClick = () => {
    if (!hasLogin) {
      setIsOpenDialog(true)
    } else {
      navigate('/checkout')
    }
  }

  // form action
  const onNumberChange = (value, number) => {
    dispatch(setCartLists({
      ...value,
      quantity: number
    }))
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement='right' size='md'>
      <DrawerOverlay />
      <DrawerContent className='cart-page'>
        <DrawerHeader>
          <Trans>cartPage.summary</Trans>
          <img className='close-icon' src={Close} onClick={onClose} />
        </DrawerHeader>

        <DrawerBody>
          { Array.from(cartLists.values()).map((i, k) => (
            <div className='cart-item' key={k}>
              <div className='session-item'>
                <div className='session'>
                  <Image width='40px' src={i.cover} />
                  <span className='ml-8'>{i.productName}</span>
                </div>
                <Image onClick={() => onDelSession(i.id)} className='close-icon' width='20px' src={Delete} />
              </div>
              <div className='quantity-box mt-20'>
                <p><Trans>cartPage.quantity</Trans></p>
                <div className='content-box mt-8'>
                  <FormControl>
                    <NumberInput
                      width='80px'
                      value={i.quantity}
                      onChange={(n) => onNumberChange(i, n)}
                      className='mt-8'
                      defaultValue={1}
                      max={i.inventory}
                      min={1}>
                      <NumberInputField width='auto' />
                    </NumberInput>
                  </FormControl>
                  <span>{currencySymbol}{moneyFormat(i.price*i.quantity/unit)}</span>
                </div>
              </div>
            </div>
          ))}
        </DrawerBody>

        <DrawerFooter>
          <div className='content-box'>
            <span className='remark'><Trans>cartPage.tooltip</Trans></span>
            <div className='price-box mt-8'>
              <Trans>cartPage.total</Trans>
              <span>{currencySymbol} {moneyFormat(totalPrice)}</span>
            </div>
          </div>
          <Button onClick={onCheckoutClick} className='mt-12 mb-30' colorScheme='twitter' width='100%'>
            <Trans>cartPage.checkout</Trans>
          </Button>
        </DrawerFooter>
      </DrawerContent>

      <AlertDialog
        isOpen={isOpenDialog}
        onClose={onDialogClose}
        leastDestructiveRef={cancelRef}>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            <Trans>tooltip.title</Trans>
          </AlertDialogHeader>
          <AlertDialogBody><Trans>tooltip.content</Trans></AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme='twitter' ref={cancelRef} onClick={onDialogConfirm}>
              <Trans>tooltip.confirmText</Trans>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Drawer>
  )
}

export default CartPage