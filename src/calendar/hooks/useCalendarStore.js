import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { bookingApi } from "../../api/bookingApi";
import { onAddNewEvent, 
         onDeleteEvent, 
         onLoadEvents, 
         onSetActiveEvent, 
         onUpdateEvent } from "../../store/calendar/calendarSlice";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events,activeEvent } = useSelector(state => state.calendar);
  const {user} = useSelector(state => state.auth);
  
  const setActiveEvent = (CalendarEvent) => {
    dispatch(onSetActiveEvent(CalendarEvent));
  }
  
  const startSavingEvent = async(CalendarEvent) => {
    console.log("startSavingEvent ->", CalendarEvent );
    try {
      if(CalendarEvent.id) {
        // Estoy actualizando
        await bookingApi.put(`/events/${CalendarEvent.id}`,CalendarEvent);
        dispatch(onUpdateEvent({...CalendarEvent, user}))
      } else { // Nueva reserva
        const {data} = await bookingApi.post('/events', CalendarEvent);
        console.log({data});
        dispatch(onAddNewEvent({...CalendarEvent, id: data.evento.id, user}));
      }
     
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar / modificar una reserva.', error.response.data?.msg, 'error');      
    }
  }

  const startDeletingEvent = async() => {
    try {
      await bookingApi.delete(`events/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire('Error al borrar la reserva.', error.response.data?.msg, 'error');
    }

  }

  const startLoadingEvents = async() => {
    try {
      const {data} = await bookingApi.get('/events');
      const events = convertEventsToDateEvents(data.bookings);
      dispatch(onLoadEvents(events));

    } catch (error) {
      console.log("Error cargando eventos.");
      console.log(error);
    }
  }

  return {
    // Properties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    // Methods
    setActiveEvent,
    startLoadingEvents,
    startSavingEvent,
    startDeletingEvent
  }
}
