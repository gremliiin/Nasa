import {mrpAPI} from "../api/api";

const SET_IS_FETCHING = 'MRP/SET_IS_FETCHING';
const SET_DISABLE_BUTTON = 'MRP/SET_DISABLE_BUTTON';
const SET_RESPONSE_ERROR = 'MRP/SET_RESPONSE_ERROR';
const SET_DATA = 'MRP/SET_DATA';
const SET_SOL = 'MRP/SET_SOL';
const SET_CAMERA = 'MRP/SET_CAMERA';
const SET_EARTH_DATE = 'MRP/SET_EARTH_DATE';
const SET_IS_EARTH_DATE = 'MRP/SET_IS_EARTH_DATE';

const initialState = {
    sol: 1000,
    camera: 'FHAZ',
    earthDate: '2015-6-3',
    currentDate: new Date(),
    isFetching: false,
    disableButton: true,
    responseError: null,
    data: null,
    isEarthDate: false,
};

const MRPReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.bool,
            };
        case SET_DISABLE_BUTTON:
            return {
                ...state,
                disableButton: action.bool,
            };
        case SET_RESPONSE_ERROR:
            return {
                ...state,
                responseError: action.error,
            };
        case SET_DATA:
            return {
                ...state,
                data: action.data,
            };
        case SET_SOL:
            return {
                ...state,
                sol: action.sol,
            };
        case SET_CAMERA:
            return {
                ...state,
                camera: action.camera,
            };
        case SET_EARTH_DATE:
            return {
                ...state,
                earthDate: action.date,
            };
        case SET_IS_EARTH_DATE:
            return {
                ...state,
                isEarthDate: action.bool,
            };
        default:
            return state;
    }
};

export const setIsFetchingAC = (bool) => ({type: SET_IS_FETCHING, bool});
export const setDisableButton = (bool) => ({type: SET_DISABLE_BUTTON, bool});
export const setResponseError = (error) => ({type: SET_RESPONSE_ERROR, error});
export const setData = (data) => ({type: SET_DATA, data});
export const setSol = (sol) => ({type: SET_SOL, sol});
export const setCamera = (camera) => ({type: SET_CAMERA, camera});
export const setEarthDate = (date) => ({type: SET_EARTH_DATE, date});
export const setIsEarthDate = (bool) => ({type: SET_IS_EARTH_DATE, bool});

export const getDataEarthDate = (isEarthDate, date, sol, camera) => async (dispatch) => {
    dispatch(setIsFetchingAC(true));
    dispatch(setDisableButton(true));
    let data;
    if (isEarthDate === false) {
        data = await mrpAPI.getInfoToSol(sol, camera);
    } else {
        data = await mrpAPI.getInfoToEarthDate(date, camera);
    }
    if (data !== 'error') {
        dispatch(setIsFetchingAC(false));
        dispatch(setDisableButton(false));
        dispatch(setResponseError(null));
        dispatch(setData(data));
    } else {
        dispatch(setIsFetchingAC(false));
        dispatch(setDisableButton(false));
        dispatch(setResponseError('Ошибка ввода данных'));
    }
};

export default MRPReducer