import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en'
import cn from './cn'

// the translations
const resources = {
  en: {
    translation: en
  },
  cn: {
    translation: cn
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n