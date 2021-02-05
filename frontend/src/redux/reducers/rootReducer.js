import { combineReducers } from "redux";
import { citiesReducer } from "./citiesReducer";
import { itinerariesReducer } from "./itinerariesReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
    citiesR: citiesReducer,
    itinerariesR: itinerariesReducer,
    usersR: usersReducer
})


export default rootReducer