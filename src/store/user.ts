import { createSlice } from '@reduxjs/toolkit'

export interface UserInfoState {
  userId: string,
  userName: string,
  avatar: string,
  permissions: string[]
}

const userReducer = createSlice({
  name: 'userInfo',
  initialState: () => {
    const userInfo: UserInfoState = {
      userId: '',
      userName: '',
      avatar: '',
      permissions: []
    }
    return {userInfo}
  },
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload
    }
  }
})

export const { setUserInfo } = userReducer.actions

export default userReducer.reducer