import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import { addHours } from "date-fns";
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore, useCalendarStore, useAuthStore } from '../../calendar';
import { onDeleteDishe } from "../../store/auth/authSlice";
import { useDispatch } from 'react-redux';

registerLocale('es', es);

const customStyles = {
    content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root'); // El #root lo saco de index.html


export const CalendarModal = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const {isDateModalOpen,closeDateModal} = useUiStore();
    const {activeEvent,startSavingEvent } = useCalendarStore();
    const {dishes} = useAuthStore();

    const dispatch = useDispatch();

    const dishesArray = dishes.map(dish => Object.values(dish)[0] + '\n');

    const [formValues, setFormValues] = useState({
        title: 'Manuel',
        notes: 'Casas',
        start: new Date(),
        end: addHours(new Date(),2),
        dishes: '' 
    });

    const titleClass = useMemo(() => {
        if(!formSubmitted) return ''; 
        return (formValues.title.length > 0)
        ?'is-valid'
        :'is-invalid'
    }, [formValues.title, formSubmitted])
    
    useEffect(() => {
        if(activeEvent !== null) {
            setFormValues({...activeEvent});
        }
    }, [activeEvent])


    const onInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }
    
    const onDateChanged = (event, changing) => {
        setFormValues({
            ...formValues,
            [changing]: event,
        })
    }
    const onCloseModal =  () => {
        console.log("Cerrando el modal.");
        closeDateModal();
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        setFormSubmitted(true);
        formValues.end = addHours(formValues.start,2); // Se establece en dos horas el tiempo para comer
        formValues.dishes = dishesArray; 
        if(formValues.title.length <= 0) return;
        console.log(formValues);
        await startSavingEvent(formValues);
        closeDateModal();
        dispatch(onDeleteDishe()); // Una vez guardada la reserva; borramos los platos
        setFormSubmitted(false); // vuelve a estado inicial
    }

    return (
        <Modal
            isOpen={isDateModalOpen}
            onRequestClose={onCloseModal} // Es la función que se va a llamar cuando se cierra
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={300}
        >
            <h1>Nueva Reserva</h1>
            <hr/>
            <form className="container" onSubmit={onSubmit}>
                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker
                        minDate={new Date()}
                        selected={formValues.start}
                        onChange={(event) => onDateChanged(event, 'start')}
                        className="form-control"
                        dateFormat="Pp" // Con esto añado HH:MM
                        showTimeSelect
                        locale='es'
                        timeCaption='Hora'
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Número de personas</label>
                    <input
                        type="text"
                        className={`form-control ${titleClass}`}
                        placeholder="Por favor, indique si hay menores."
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={onInputChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">Personas en la mesa</small>
                </div>

                <div className="form-group mb-2">
                    <label>Alguna consideración adicional</label>
                    <textarea
                        type="text"
                        className="form-control"
                        placeholder="Por favor, indique posibles intolerancias, alergias o alguna otra consideración a tener en cuenta."
                        rows="5"
                        name="notes"
                        value={formValues.notes}
                        onChange={onInputChange}
                    ></textarea>
                    <small id="emailHelp" className="form-text textmuted">Consideraciones adicionales</small>
                </div>
                <div className="form-group mb-2">
                    <label>Platos reservados</label>
                    <textarea
                        type="text"
                        className="form-control"
                        rows="5"
                        name="dishes"
                        value={dishesArray}
                        onChange={onInputChange}
                    ></textarea>
                </div>
                <br />

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                    >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>
            </form>
        </Modal>
    )
}
