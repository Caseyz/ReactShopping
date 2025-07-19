import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Image,
  Container
} from '@chakra-ui/react'
import { useState } from 'react'
import { Trans } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Global from '@/assets/global.svg'
import { setUserInfo, UserInfoState } from '@/store/user'
import { loginUser } from '@/api'
import { unicode } from '@/utils'

import './index.scss'
import i18n from "@/i18n";
import {Form} from "formik";

const LoginPage = () => {
  const [loading, setLoading] = useState(false)

  // i18n language
  const lang = i18n.language
  const switchLang = () => i18n.changeLanguage(lang === 'cn' ? 'en' : 'cn')

  // route navigate
  const [searchParams] = useSearchParams()
  const redirect = searchParams.get('redirect')

  // login check
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = () => {
    if (!username || !password) {
      if (!username) {
        setShowUserError(true)
      }
      if (!password) {
        setShowPasswordError(true)
      }
      return
    }
    const userInfo: UserInfoState = {
      userId: unicode(),
      userName: username,
      avatar: '',
      permissions: [
        'user:checkout'
      ]
    }
    dispatch(setUserInfo(userInfo))
    navigate(redirect || '/')
  }

  // form data
  const [showUserError, setShowUserError] = useState(false)
  const [showPasswordError, setShowPasswordError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container className='login-page'>
      <div className='lang-box'>
        <Image width='20px' onClick={switchLang} src={Global} />
        <span className='ml-8' onClick={switchLang}>{lang}</span>
      </div>
      <div>
        <div className='login-title'><Trans>login</Trans></div>
        <FormControl isInvalid={showUserError}>
          <FormLabel><Trans>loginPage.username</Trans></FormLabel>
          <Input value={username} onChange={e => setUsername(e.target.value)} type='text' />
          <FormErrorMessage><Trans>loginPage.userError</Trans></FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={showPasswordError} className='mt-12'>
          <FormLabel><Trans>loginPage.password</Trans></FormLabel>
          <Input value={password} onChange={e => setPassword(e.target.value)} type='password' />
          <FormErrorMessage><Trans>loginPage.passwordError</Trans></FormErrorMessage>
        </FormControl>

        <div className='mt-12'>
          <Button
            type='submit'
            onClick={onLogin}
            isLoading={loading}
            width='100%'
            colorScheme='twitter'>
            <Trans>signIn</Trans>
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default LoginPage