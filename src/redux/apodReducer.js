import {apodAPI as apodApi} from "../api/api";


const SET_IMAGE_SRC = 'APOD/SET_IMAGE_SRC';
const SET_DATE = 'APOD/SET_DATE';
const SET_COPYRIGHT = 'APOD/SET_COPYRIGHT';
const SET_EXPLANATION = 'APOD/SET_EXPLANATION';
const SET_CHECK_VIDEO = 'APOD/CHECK_VIDEO';
const SET_CHECK_FETCHING = 'APOD/CHECK_FETCHING';
const SET_ACTIVE_DATE = 'APOD/SET_ACTIVE_DATE';
const CHECK_RESPONSE_ERROR = 'APOD/CHECK_RESPONSE_ERROR';
const SET_STATE_BUTTON = 'APOD/SET_STATE_BUTTON';

const initialState = {
    title: 'APOD(Astronomy Picture of the Day)',
    text: ' Один из самых популярных веб-сайтов НАСА - Astronomy Picture of the Day. Введите дату и получите картинку.',
    imageSrc: '',
    date: '',
    copyright: '',
    explanation: '',
    isVideo: false,
    isFetching: false,
    activeDate: null,
    currentDate: new Date(),
    responseError: null,
    stateButton: false,

};

const apodReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_SRC:
            return {
                ...state,
                imageSrc: action.imageSrc,
            };
        case SET_DATE:
            return {
                ...state,
                date: action.date,
            };
        case SET_COPYRIGHT:
            return {
                ...state,
                copyright: action.copyright,
            };
        case SET_EXPLANATION:
            return {
                ...state,
                explanation: action.explanation,
            };
        case SET_CHECK_VIDEO:
            return {
                ...state,
                isVideo: action.bool,
            };
        case SET_CHECK_FETCHING:
            return {
                ...state,
                isFetching: action.bool
            };
        case SET_ACTIVE_DATE:
            return {
                ...state,
                activeDate: action.date,
            };
        case CHECK_RESPONSE_ERROR:
            return {
                ...state,
                responseError: action.error === null ? action.error :
                    action.error +  `${state.currentDate.getFullYear()}-${state.currentDate.getMonth() + 1}-${state.currentDate.getDate()}`,
            };
        case SET_STATE_BUTTON:
            return {
                ...state,
                stateButton: action.bool,
            };
        default:
            return state;
    }


};

export const setImageAC = (imageSrc) => ({type: SET_IMAGE_SRC, imageSrc});
export const setDateAC = (date) => ({type: SET_DATE, date});
export const setCopyrightAC = (copyright) => ({type: SET_COPYRIGHT, copyright});
export const setExplanationAC = (explanation) => ({type: SET_EXPLANATION, explanation});
export const setIsVideoAC = (bool) => ({type: SET_CHECK_VIDEO, bool});
export const setIsFetchingAC = (bool) => ({type: SET_CHECK_FETCHING, bool});
export const setActiveDateAC = (date) => ({type: SET_ACTIVE_DATE, date});
export const checkResponseErrorAC = (error) => ({type: CHECK_RESPONSE_ERROR, error});
export const setStateButtonAC = (bool) => ({type: SET_STATE_BUTTON, bool});


export const getDateThunkCreator = (date) => async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    dispatch(setStateButtonAC(true));

    let data = await apodApi.getDate(date);
    if (data !== 'error') {
        if (data.url.split('').splice(0,23).join('') === 'https://www.youtube.com' ||
            data.url.split('').splice(0,24).join('') === 'https://player.vimeo.com') {
            dispatch(setIsVideoAC(true));
        } else {
            dispatch(setIsVideoAC(false));
        }
        dispatch(setIsFetchingAC(false));
        dispatch(setImageAC(data.url));
        dispatch(setDateAC(data.date));
        dispatch(setExplanationAC(data.explanation));
        dispatch(setCopyrightAC(data.copyright));
        dispatch(setStateButtonAC(false));
        dispatch(checkResponseErrorAC(null));
    } else {
        dispatch(setIsFetchingAC(false));
        dispatch(setStateButtonAC(false));
        dispatch(checkResponseErrorAC(`Дата должна быть между 1995-06-16 и `));
    }
};

export default apodReducer;

