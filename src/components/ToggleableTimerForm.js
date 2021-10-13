import { useState } from "react"
import TimerForm from "./TimerForm"
import './ToggleableTimerForm.css'

const ToggleableTimerForm = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const handleFormOpen = () => {
        setIsOpen(true)
    }

    const handleFormClose = (e) => {
        e.preventDefault()
        console.log('Closing form...')
        setIsOpen(false)
    }

    const handleFormSubmit = (timer) => {
        props.onFormSubmit(timer)
        setIsOpen(false)
    }

    if (isOpen) {
        return (
            <TimerForm
                onFormSubmit={handleFormSubmit}
                onFormClose={handleFormClose}
            />
        )
    } else {
        return (
            <div className="addTimerButton">
                <button onClick={() => handleFormOpen()}>+</button>
            </div>
        )
    }
}

export default ToggleableTimerForm