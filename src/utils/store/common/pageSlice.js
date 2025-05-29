import { createSlice } from '@reduxjs/toolkit';
import { updatePageStateServer } from '@/app/actions/page-actions';
import initialState from './initialState';

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updatePageState: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { updatePageState } = pageSlice.actions;

// Thunk for handling loading states
export const updatePageStateAsync = (data) => async (dispatch) => {
  try {
    dispatch(updatePageState({ pageLoading: true }));
    const result = await updatePageStateServer(data);
    dispatch(updatePageState({ ...result, pageLoading: false }));
    return result;
  } catch (error) {
    dispatch(updatePageState({ pageLoading: false, error: error.message }));
    throw error;
  }
};

export default pageSlice.reducer;


// Server-side operation in component how to use it
//import { updatePageStateAsync } from '@/utils/store/slices/pageSlice';

//! In your component how to call api
// const handleUpdate = async (data) => {
//   await dispatch(updatePageStateAsync(data));
// };