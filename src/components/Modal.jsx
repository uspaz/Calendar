import FormTask from './FormTask'
import '../styles/modal.css'
import { useState } from 'react'

const Modal = ({ isOpen, closeModal }) => {
  const [addTask, setAddTask] = useState(false)
  return (
    <>
      {isOpen && (
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <button className="add-task" onClick={() => setAddTask(!addTask)}>
              Agregar tarea
            </button>
            {addTask ? <FormTask /> : null}
            <button onClick={closeModal} type="button" className="close-modal">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
