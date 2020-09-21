import {neowsAPI} from "../api/api";

const SET_START_DATE = 'NEOWS/SET_START_DATE';
const SET_END_DATE = 'NEOWS/SET_END_DATE';
const SET_DATA = 'NEOWS/SET_DATA';
const SET_IS_FETCHING = 'NEOWS/SET_IS_FETCHING';
const SET_DISABLE_BUTTON = 'NEOWS/SET_DISABLE_BUTTON';
const SET_RESPONSE_ERROR = 'NEOWS/SET_RESPONSE_ERROR';


const initialState = {
    currentDate: new Date(),
    startDate: null,
    endDate: null,
    data: null,
    isFetching: false,
    disableButton: true,
    responseError: null,
};


const NeowsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_START_DATE:
            return{
                ...state,
                startDate: action.date,
            };
        case SET_END_DATE:
            return{
                ...state,
                endDate: action.date,
            };
        case SET_DATA:
            return {
              ...state,
              data: action.data,
            };
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

        default:
            return state;
    }

};

export const setStartDateAC = (date) => ({type: SET_START_DATE, date});
export const setEndDateAC = (date) => ({type: SET_END_DATE, date});
export const setDataAC = (data) => ({type: SET_DATA, data});
export const setIsFetchingAC = (bool) => ({type: SET_IS_FETCHING, bool});
export const setDisableButton = (bool) => ({type: SET_DISABLE_BUTTON, bool});
export const setResponseError = (error) => ({type: SET_RESPONSE_ERROR, error});

export const getInfoThunkCreator = (startDate, endDate) => async (dispatch) => {
      dispatch(setIsFetchingAC(true));
      dispatch(setDisableButton(true));

      let data = await neowsAPI.getInfo(startDate, endDate);
      if(data !== 'error') {
          dispatch(setDataAC(data));
          dispatch(setIsFetchingAC(false));
          dispatch(setDisableButton(false));
          dispatch(setResponseError(null));
      } else if (data === 'error') {
          dispatch(setResponseError('Неверный ввод даты, разница в датах должна составлять не более 7-ми дней'));
          dispatch(setIsFetchingAC(false));
          dispatch(setDisableButton(false));
      }


};

export default NeowsReducer;