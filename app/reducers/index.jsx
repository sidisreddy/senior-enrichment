import { combineReducers } from "redux";
import axios from 'axios';

const initialState = {
  campuses: [],
  students: [],
  newCampusEntry: "",
  newStudentEntry: {}
};

//action types
const GET_CAMPUSES = "GET_CAMPUSES"; //get list of all campuses
const GET_STUDENTS = "GET_STUDENTS"; //get list of all students

//action creators
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

//thunk creators

export function fetchCampuses() {
  return function thunk (dispatch) {
    return axios.get('/api/campus').then(res => res.data).then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}


export function fetchStudents() {
  return function thunk (dispatch) {
    return axios.get('/api/student').then(res => res.data).then(student => {
        const action = getStudents(student);
        dispatch(action);
      });
  }
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return [...state, action.campuses];
    case GET_STUDENTS:
      return [...state, action.students];
    default:
      return state;
  }
};

export default rootReducer;
