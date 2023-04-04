import classes from './calender.module.css'
import ToDo from '../../assets/images/icon-todo.svg'
import Calender from '../../assets/images/icon-calendar.svg'
import Reminder from '../../assets/images/icon-reminders.svg'
import planning from '../../assets/images/icon-planning.svg'
const CalenderDrop = () => {
    return (
        <>

            <div className={classes.calender} >
                <a><img src={ToDo} alt="" srcset="" />ToDo </a>
                <a><img src={Calender} alt="" srcset="" />Calender </a>
                <a><img src={Reminder} alt="" srcset="" />Reminders </a>
                <a><img src={planning} alt="" srcset="" />ToDo </a>
            </div>

        </>
    )
}

export default CalenderDrop