import { v4 as uuidv4 } from 'uuid';
import EditableTimerList from "./EditableTimerList"
import ToggleableTimerForm from "./ToggleableTimerForm"
import { newTimer } from '../helpers'
import { useState } from 'react';

const default_timers = [
    {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
    },
    {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
    }
]

const TimersDashboard = () => {
    const [timers, setTimers] = useState(default_timers)
    const createTimer = (timer) => {
        const t = newTimer(timer)
        setTimers(timers.concat(t))
    }
    const updateTimer = (attrs) => {
        const newTimers = timers.map( timer => {
            if (timer.id === attrs.id) {
                return Object.assign({}, timer, {
                    title: attrs.title,
                    project: attrs.project,
                })
            } else {
                return timer
            }
        })
        setTimers(newTimers)
    }
    const handleCreateFormSubmit = (timer) => {
        createTimer(timer)
    }
    const handleEditFormSubmit = (attrs) => {
        updateTimer(attrs)
    }

    const deleteTimer = (timerId) => {
        setTimers( timers.filter( t => t.id !== timerId ) )
    }

    const handleTrashClick = (timerId) => {
        deleteTimer(timerId)
    }
    
    const startTimer = (timerId) => {
        const now = Date.now()
        setTimers(timers.map( timer => {
            if (timer.id === timerId) {
                return Object.assign({}, timer, {
                    runningSince: now,
                })
            } else {
                return timer
            }
        }))
    }
    const stopTimer = (timerId) => {
        const now = Date.now()

        setTimers( timers.map( timer => {
            if (timer.id === timerId) {
                const lastElapsed = now - timer.runningSince
                return Object.assign({}, timer, {
                    elapsed: timer.elapsed + lastElapsed,
                    runningSince: null
                })
            } else {
                return timer
            }
        }))
    }

    const handleStartClick = (timerId) => {
        startTimer(timerId)
    }

    const handleStopClick = (timerId) => {
        stopTimer(timerId)
    }
    return (
        <div className="">
            <div>
                <EditableTimerList
                    timers={timers}
                    onFormSubmit={handleEditFormSubmit}
                    onTrashClick={handleTrashClick}
                    onStartClick={handleStartClick}
                    onStopClick={handleStopClick}
                />
                <ToggleableTimerForm
                    onFormSubmit={handleCreateFormSubmit}
                />
            </div>
        </div>
    )
}

export default TimersDashboard