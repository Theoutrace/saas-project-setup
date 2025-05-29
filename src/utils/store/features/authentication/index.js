import { createSlice } from '@reduxjs/toolkit';
import { updatePageStateServer } from '@/app/actions/page-actions';
import initialState from './initialState';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authState: (state, action) => {
        return { ...state, ...action.payload };
    }
  }
});

export const { authState } = pageSlice.actions;

// Thunk for handling loading states
export const updateAuthStateAsync = (data) => async (dispatch) => {
  try {
    dispatch(authState({ pageLoading: true }));
    const result = await updatePageStateServer(data);
    dispatch(authState({ ...result, pageLoading: false }));
    return result;
  } catch (error) {
    dispatch(authState({ pageLoading: false, error: error.message }));
    throw error;
  }
};

export default pageSlice.reducer;


// Server-side operation in component how to use it
//import { updateAuthStateAsync } from '@/utils/store/slices/pageSlice';

//! In your component how to call api
// const handleUpdate = async (data) => {
//   await dispatch(updateAuthStateAsync(data));
// };