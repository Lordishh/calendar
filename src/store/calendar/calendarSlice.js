import { addHours } from "date-fns";

import { createSlice } from "@reduxjs/toolkit";

const tempEvent = {
  _id: new Date().getTime(),
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
    onSetActiveEvent: ( state, { payload }) => {
      state.activeEvent = payload;
    },
    onAddNewEvent: ( state, { payload } ) => {
      state.events.push( payload );
      state.activeEvent = null;
    },
    onUpdateEvent: ( state, { payload } ) => {
      state.events = state.events.map( event => {
        if ( event._id === payload._id ) {
          return payload;
        }

        return event;
      })
    }
  }
});

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent } = calendarSlice.actions;