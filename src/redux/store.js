import { applyMiddleware, combineReducers, createStore } from "redux"
import count from "./reducers/count"
import persons from "./reducers/person"

import thunk from "redux-thunk"
const allReducer = combineReducers({
    count,
    persons
})

export default createStore(allReducer, applyMiddleware(thunk))

