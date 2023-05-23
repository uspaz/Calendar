import { useModal } from '../hooks/useModal'
import Modal from './Modal'
import '../styles/calendar.css'

const Calendar = ({ month, days }) => {
  const [openModal, closeModal, isOpen] = useModal()

  return (
    <section className="contain-all">
      <div className="calendar-container">
        <h3 className="calendar-header">{month}</h3>
        <div className="calendar">
          {days.map((day) => (
            <div className="days" key={day} onClick={openModal}>
              {day}
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} />
    </section>
  )
}

export default Calendar
