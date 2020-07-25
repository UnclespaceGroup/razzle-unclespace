import { combineReducers } from 'redux'
import { reducer as remoteDataReducer } from '@aic/react-remote-data-provider'

export const rootReducer = combineReducers({
  remoteData: remoteDataReducer
})
