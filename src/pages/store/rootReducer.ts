import { combineReducers } from '@reduxjs/toolkit'
import { reducer as userReducer } from '../slices/userReducer'
import { reducer as logedReducer } from '../slices/logedReducer'

const rootReducer = combineReducers({
    user: userReducer,
    loged: logedReducer,
})

export default rootReducer;