import { useSelector } from "react-redux";
import { useCalendarStore } from "../../calendar";

export const FabDelete = () => {
    const {isDateModalOpen} = useSelector(state => state.ui);
    const {startDeletingEvent, hasEventSelected} = useCalendarStore();

    const handleDelete = () => {
        startDeletingEvent();

    }
  return (
    <button
        className="btn btn-danger fab-danger"
        onClick={handleDelete}
        style = {{
            display: (hasEventSelected) ? '' : 'none' // REVISAR ESTO PARA QUE CUANDO SE HABRA EL MODAL, SE CIERRE EL BOTON DE BORRAR
        }}
    >
        <i className="fas fa-trash-alt"></i>
    </button>
  )
}
