
export const CalendarEvent = ({event}) => {
    const {title, user, notes, dishes} = event;
  return (
    <>
        <strong>{title}</strong>
        <span> - {user.name}</span>
        <span> - {notes}</span>
        <span> - {dishes}</span>
    </>
  )
}
