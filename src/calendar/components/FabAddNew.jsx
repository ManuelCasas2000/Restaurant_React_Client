import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../calendar";

export const FabAddNew = () => {
    const {openDateModal} = useUiStore();
    const {setActiveEvent} = useCalendarStore();
    const habdleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(),2),
            bgColor: '#fafafa',
            user: {
                _id:'123',
                name:'Manuel'
            }
        })
        openDateModal();
    }
  return (
    <button
        className="btn btn-primary fab-new"
        onClick={habdleClickNew}
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
