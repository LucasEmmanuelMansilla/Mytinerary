import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducer";
import { itinerariesReducer } from "./itinerariesReducer";

const rootReducer = combineReducers({
    citiesR: citiesReducer,
    itinerariesR: itinerariesReducer
})


export default rootReducer