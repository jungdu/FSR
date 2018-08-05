import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {FETCH_IMGSITES, FETCH_SOUNDSITES, FETCH_FONTSITES, FETCH_FAILS, SELECT_SITE } from '../actions/types'
import {reducer as reduxFormReducer} from 'redux-form';

const INITIAL_STATE ={
    img_sites:[],
    font_sites:[],
    sound_sites:[],
    error:{},
    selected:{}
}



const sitesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'something':
            return false;
        case FETCH_IMGSITES:
            return {
                ...state,
                img_sites: action.datas
            }
        case FETCH_SOUNDSITES:
            return{
                ...state,
                sound_sites: action.datas
            }
        case FETCH_FONTSITES:
            return {
                ...state,
                font_sites: action.datas
            }
        case FETCH_FAILS:
            console.log(action.err);
            return {
                ...state,
                error:action.err
            }
        case SELECT_SITE:
            console.log("Select Site!");
            console.log(action.selectedSite.siteName);
            
            return {
                ...state,
                selected:action.selectedSite
            }
        default:
            return state;
    }
}

export const init = () => {

    const reducer = combineReducers({
        sites: sitesReducer,
        form: reduxFormReducer
    });

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}