import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ScrollSliceState, Scroll } from '@/redux/scroll/types';

const initialState: ScrollSliceState = {
  scroll: {
    scrollX: 0,
    scrollY: 0,
  },
};

const scrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll(state: ScrollSliceState, action: PayloadAction<Scroll>) {
      state.scroll = action.payload;
    },
  },
});

export const { setScroll } = scrollSlice.actions;

export default scrollSlice.reducer;
