import {combineReducers} from 'redux'
import {BurgerReducer} from './reducers/BurgerReducer'

export const rootReducer = combineReducers({
    //Nơi chứa các reducer cho nghiệp vụ (store con)
    BurgerReducer
})