import { addHours } from "date-fns";

import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
  title: 'Aprende React',
  notes: 'React es un framework de JavaScript',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Enuel',
  }
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [
      tempEvent
    ],
    activeEvent: null
  },
  reducers: {
    increment: (state, /* action */) => {
      state.counter += 1;
    },
  }
});

export const { increment } = calendarSlice.actions;