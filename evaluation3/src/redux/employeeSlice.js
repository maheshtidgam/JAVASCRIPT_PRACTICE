import { createSlice } from '@reduxjs/toolkit';
import { db } from '../firebase';
import { ref, set, get, remove } from 'firebase/database';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    setEmployees: (state, action) => action.payload,
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      return state.filter((emp) => emp.email !== action.payload);
    },
    editEmployee: (state, action) => {
      const index = state.findIndex((emp) => emp.email === action.payload.email);
      if (index >= 0) state[index] = action.payload;
    },
  },
});

export const { setEmployees, addEmployee, deleteEmployee, editEmployee } = employeeSlice.actions;

export const fetchEmployees = () => async (dispatch) => {
  const employeeRef = ref(db, 'employees');
  const snapshot = await get(employeeRef);
  const data = snapshot.val() ? Object.values(snapshot.val()) : [];
  dispatch(setEmployees(data));
};

export const addEmployeeToDB = (employee) => async (dispatch) => {
  const employeeRef = ref(db, `employees/${employee.email.replace('.', '_')}`);
  await set(employeeRef, employee);
  dispatch(addEmployee(employee));
};

export const deleteEmployeeFromDB = (email) => async (dispatch) => {
  const employeeRef = ref(db, `employees/${email.replace('.', '_')}`);
  await remove(employeeRef);
  dispatch(deleteEmployee(email));
};

export default employeeSlice.reducer;
