import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSliceState } from '@/redux/scroll/types';

const initialState: ScrollSliceState = {
  isChangeHeader: false,
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setIsChangeHeader(state: ScrollSliceState, action: PayloadAction<boolean>) {
      state.isChangeHeader = action.payload;
    },
  },
});

export const { setIsChangeHeader } = scrollSlice.actions;

export default scrollSlice.reducer;
