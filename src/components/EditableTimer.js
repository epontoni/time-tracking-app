import { useState } from "react"
import Timer from "./Timer"
import TimerForm from "./TimerForm"

const EditableTimer = ({
    id,
    title,
    project,
    elapsed,
    runningSince,
    onFormSubmit,
    onTrashClick,
    onStartClick,
    onStopClick }) => {
    
    const [editFormOpen, setEditFormOpen] = useState(false)

    const handleEditClick = () => {
        openForm()
    }
    const handleFormClose = () => {
        closeForm()
    }
    const handleSubmit = (timer) => {
        onFormSubmit(timer)
        closeForm()
    }
    const closeForm = () => {
        setEditFormOpen(false)
    }
    const openForm = () => {
        setEditFormOpen(true)
    }

    if(editFormOpen) {
        return (
            <TimerForm
                id={id}
                title={title}
                project={project}
                onFormSubmit={handleSubmit}
                onFormClose={handleFormClose}
            />
        )
    } else {
        return (
            <Timer
                id={id}
                title={title}
                project={project}
                elapsed={elapsed}
                runningSince={runningSince}
                onEditClick={handleEditClick}
                onTrashClick={onTrashClick}
                onStartClick={onStartClick}
                onStopClick={onStopClick}
            />
        )
    }
}

export default EditableTimer