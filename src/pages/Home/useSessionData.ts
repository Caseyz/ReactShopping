import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setCurrency } from '@/store/cart'
import { getSessionLists, SessionData } from '@/api'
import i18n from "@/i18n";

const useSessionData = () => {
  const lang = i18n.language

  const dispatch = useDispatch()
  const [sessionData, setSessionData] = useState<SessionData | undefined>(undefined)
  const [loadingData, setLoadingData] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true)

      try {
        const res = await getSessionLists(lang)

        // add default quantity
        res.sessionLists = res.sessionLists.map(i => ({
          ...i,
          quantity: 1
        }))
        setSessionData(res)
        dispatch(setCurrency(res))
      } finally {
        setLoadingData(false)
      }
    }

    if (!sessionData) fetchData()
  })

  return {
    sessionData,
    loadingData,
    setSessionData
  }
}

export default useSessionData