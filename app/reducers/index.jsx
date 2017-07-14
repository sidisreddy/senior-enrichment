import { combineReducers } from "redux";
import axios from "axios";

const initialState = {
  campuses: [],
  students: [],
  newCampusEntry: "",
  newStudentEntry: "",
  removeStudentEntry: "",
  updateCampus: "",
  updateStudent: ""
};

//action types
const GET_CAMPUSES = "GET_CAMPUSES"; //get list of all campuses
const WRITE_CAMPUS_NAME = "WRITE_CAMPUS_NAME"; //write campus name
const GET_CAMPUS = "GET_CAMPUS"; //get new campus'
const REMOVE_CAMPUS = "REMOVE_CAMPUS"; //remove campus from state
const UPDATE_CAMPUS = "UPDATE_CAMPUS";

const GET_STUDENTS = "GET_STUDENTS"; //get list of all students
const WRITE_STUDENT = "WRITE_STUDENT"; //create student
const GET_STUDENT = "GET_STUDENT"; //get new student into state
const DELETE_STUDENT = "DELETE_STUDENT"; //delete a student
const REMOVE_STUDENT = "REMOVE_STUDENT"; //remove student from state
const UPDATE_STUDENT = "UPDATE_STUDENT";

//action creators CAMPUS
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getCampus(campus) {
  const action = { type: GET_CAMPUS, campus };
  return action;
}

export function writeCampusName(campusName) {
  const action = { type: WRITE_CAMPUS_NAME, campusName };
  return action;
}

export function removeCampus(campus) {
  const action = { type: REMOVE_CAMPUS, campus };
  return action;
}

export function updateCampus(campusName) {
  const action = { type: UPDATE_CAMPUS, campusName };
  return action;
}

//action creators STUDENTS
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}
export function getStudent(student) {
  const action = { type: GET_STUDENT, student };
  return action;
}

export function writeStudent(studentName) {
  const action = { type: WRITE_STUDENT, studentName };
  return action;
}

export function deleteStudent(studentId) {
  const action = { type: DELETE_STUDENT, studentId };
  return action;
}

export function removeStudent(student) {
  const action = { type: REMOVE_STUDENT, student };
  return action;
}

export function updateStudent(studentName) {
  const action = { type: UPDATE_STUDENT, studentName };
  return action;
}

//thunk creators

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get("/api/campus").then(res => res.data).then(campuses => {
      const action = getCampuses(campuses);
      dispatch(action);
    });
  };
}

export function postCampus(campus) {
  console.log("posting campus ", campus);
  return function thunk(dispatch) {
    return axios
      .post("/api/campus", campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampus(newCampus);
        dispatch(action);
      });
  };
}

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get("/api/student").then(res => res.data).then(student => {
      const action = getStudents(student);
      dispatch(action);
    });
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios
      .post("/api/student", student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent);
        dispatch(action);
      });
  };
}

export function deleteOneStudent(studentId, history) {
  return function thunk(dispatch) {
    var callRequest = "/api/student/" + studentId;
    //console.log("delete called " callRequest)
    return axios.delete(callRequest).then(res => res.data).then(student => {
      const action = removeStudent(student);
      dispatch(action);
      history.push(`/students`);
    });
  };
}

export function deleteOneCampus(campusId, history) {
  return function thunk(dispatch) {
    var callRequest = "/api/campus/" + campusId;
    return axios.delete(callRequest).then(res => res.data).then(campus => {
      const action = removeCampus(campus);
      dispatch(action);
      history.push(`/campuses`);
    });
  };
}

export function updateCampusM(campusName, campusId, history) {
  return function thunk(dispatch) {
    console.log("UPDATE COMING");
    var callRequest = "/api/campus/" + campusId;
    console.log("TEST ", callRequest);
    return axios
      .put(callRequest, campusName)
      .then(res => res.data)
      .then(campus => {
        const action = removeCampus(campus);
        dispatch(action);
        var reDirect = "/campus/" + campusId;
        history.push(reDirect);
      });
  };
}

export function updateStudentM(studentName, studentId, history) {
  return function thunk(dispatch) {
    console.log("UPDATE COMING");
    var callRequest = "/api/campus/" + campusId;
    return axios
      .put(callRequest, { studentName })
      .then(res => res.data)
      .then(campus => {
        const action = removeCampus(campus);
        dispatch(action);
        var reDirect = "/campus/" + campusId;
        history.push(reDirect);
      });
  };
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, { campuses: action.campuses });
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students });
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, { newCampusEntry: action.campusName });
    case GET_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses, action.campus]
      });
    case GET_STUDENT:
      return Object.assign({}, state, {
        students: [...state.students, action.student]
      });
    case WRITE_STUDENT:
      return Object.assign({}, state, { newStudentEntry: action.studentName });
    case UPDATE_STUDENT:
      return Object.assign({}, state, { updateStudent: action.studentName });
    case UPDATE_CAMPUS:
      return Object.assign({}, state, { updateCampus: action.studentName });
    case DELETE_STUDENT:
      return Object.assign({}, state, { removeStudentEntry: action.studentId });
    case REMOVE_STUDENT:
      var currentStudents = state.students;
      const newState = Object.assign({}, state);
      console.log("Remove ", currentStudents);
      const indexOfStudentToDelete = currentStudents.findIndex(student => {
        return student.id === action.student.id;
      });
      currentStudents.splice(indexOfStudentToDelete, 1);
      newState.students = currentStudents;
      return newState;
    case REMOVE_CAMPUS:
      var currentCampuses = state.campuses;
      console.log("REMOVE CAMPUSES O ", currentCampuses);
      const newStateC = Object.assign({}, state);
      console.log("Remove ", currentCampuses);
      const indexOfCampusToDelete = currentCampuses.findIndex(campus => {
        return campus.id === action.campus.id;
      });
      currentCampuses.splice(indexOfCampusToDelete, 1);
      console.log("REMOVE CAMPUSES A ", currentCampuses);
      newStateC.campuses = currentCampuses;
      return newStateC;
    default:
      return state;
  }
};

export default rootReducer;
