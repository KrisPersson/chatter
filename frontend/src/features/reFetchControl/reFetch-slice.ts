import { createSlice } from "@reduxjs/toolkit";

interface ReFetchControlState {
  arr: number[];
}

const initialState: ReFetchControlState = { arr: [0] };

const ReFetchControlSlice = createSlice({
  name: "refetchcontrol",
  initialState,
  reducers: {
    // add
    update(state) {
      state.arr.push(1);
    },
  },
});

export const { update } = ReFetchControlSlice.actions;
export default ReFetchControlSlice.reducer;
