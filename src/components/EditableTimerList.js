import EditableTimer from "./EditableTimer"

const EditableTimerList = ({timers, onFormSubmit, onTrashClick, onStartClick, onStopClick}) => {
    return (
        <div className="timers">
            {
                timers.map( timer => (
                        <EditableTimer
                            key={timer.id}
                            id={timer.id}
                            title={timer.title}
                            project={timer.project}
                            elapsed={timer.elapsed}
                            runningSince={timer.runningSince}
                            /*editFormOpen={timer.editFormOpen}*/
                            onFormSubmit={onFormSubmit}
                            onTrashClick={onTrashClick}
                            onStartClick={onStartClick}
                            onStopClick={onStopClick}
                        />
                    )
                )
            }
        </div>
    )
}

export default EditableTimerList