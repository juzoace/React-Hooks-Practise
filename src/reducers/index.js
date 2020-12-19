import counter from './counter'
import multiply from './multiply'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    counter,
    multiply
})

export default rootReducer