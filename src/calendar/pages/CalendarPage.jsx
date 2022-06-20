import { useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { Navbar, CalendarEventBox } from '../';

import { localizer, getMessagesES } from '../../helpers';



const events = [{
  title: 'Aprende React',
  notes: 'React es un framework de JavaScript',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Enuel',
  }
}]

export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'agenda');

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event });
  }

  const onSelect = ( event ) => {
    console.log({ click: event });
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event );
  }


  return (
    <>
      <Navbar />

      <Calendar
      culture='es'
      defaultView={ lastView }
      localizer={ localizer }
      events={ events }
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc( 100vh - 80px )' }}
      messages={ getMessagesES() }
      eventPropGetter={ eventStyleGetter }
      components={{
        event: CalendarEventBox,
      }}
      onDoubleClickEvent={ onDoubleClick }
      onSelectEvent={ onSelect }
      onView={ onViewChanged }
    />
    </>
  );
};
