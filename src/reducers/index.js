import { combineReducers, createStore } from 'redux'
import { reducer as remoteDataReducer } from '@aic/react-remote-data-provider'
import deviceReducer from './deviceReducer'

export const configureStore = ({ device } = {}) => {
  const rootReducer = combineReducers({
    remoteData: remoteDataReducer,
    device: deviceReducer
  })

  return createStore(rootReducer, {
    device
  })
}
