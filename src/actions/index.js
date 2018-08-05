import {
    FETCH_IMGSITES, FETCH_SOUNDSITES, 
    FETCH_FONTSITES, FETCH_FAILS, 
    SELECT_SITE, UPDATE_SITE } from './types';
import axiosService from '../services/axios-service';

const axiosInstance = axiosService.getInstance();

export const selectSite = (selectedSite) => {
    return {
        type:SELECT_SITE,
        selectedSite
    }
}

export const updateSite = (modSite) => {
    return dispatch => {
        axiosInstance.post('/sites/update', modSite)
            .then((site)=>{
                dispatch(selectSite(modSite));
                dispatch(fetchTotal());
            });
    }
}

export const fetchTotal = () => {
    console.log("fetchTotal");
    
    return dispatch => {
        dispatch(fetchFontSites());
        dispatch(fetchSoundSites());
        dispatch(fetchImgSites());
    }
}

export const fetchFontSites = () => {
    return dispatch => {
        axiosInstance.get('/sites/font')
            .then(res => dispatch({
                type: FETCH_FONTSITES,
                datas: res.data}))
            .catch((err)=> dispatch({
                type: FETCH_FAILS,
                err: err
            }));
    }
}

export const fetchSoundSites = () => {
    return dispatch => {
        axiosInstance.get('/sites/sound')
            .then(res => dispatch({
                type: FETCH_SOUNDSITES,
                datas: res.data}))
            .catch((err)=> dispatch({
                type: FETCH_FAILS,
                err: err
            }));
    }
}

export const fetchImgSites = () => {
    return dispatch => {
        axiosInstance.get('/sites/img')
            .then(res => dispatch({
                type: FETCH_IMGSITES,
                datas: res.data}))
            .catch((err)=> dispatch({
                type: FETCH_FAILS,
                err: err
            }));
    }
}

