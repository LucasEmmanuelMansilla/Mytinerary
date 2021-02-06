import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducer";
import { itinerariesReducer } from "./itinerariesReducer";
import { userReducer } from './userReducer';


const rootReducer = combineReducers({
    citiesR: citiesReducer,
    itinerariesR: itinerariesReducer,
    userR: userReducer
})


export default rootReducer