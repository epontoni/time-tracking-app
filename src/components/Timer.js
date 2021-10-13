import './Timer.css'
import { renderElapsedString } from '../helpers'
import { useEffect, useState } from 'react'
import TimerActionButton from './TimerActionButton'
const Timer = (props) => {
    const [elapsedString, setElapsedString] = useState(renderElapsedString(props.elapsed, props.runningSince))
    
    const handleStartClick = () => {
        props.onStartClick(props.id)
    }

    const handleStopClick = () => {
        props.onStopClick(props.id)
    }

    useEffect( () => {
        const interval = setInterval( () => {
            setElapsedString(renderElapsedString(props.elapsed, props.runningSince))
        }, 50)
        return () => {
            clearInterval(interval)
        }
    })
    return (
        <div className='timer'>
            <h2>{props.title}</h2>
            <h3>{props.project}</h3>
            <div className='timestamp'>{elapsedString}</div>
            <div className='actions'>
                <span
                    onClick={props.onEditClick}
                >
                    <i className="icon-pencil"></i>
                </span>
                <span
                    onClick={() => props.onTrashClick(props.id)}
                >
                    <i className="icon-bin"></i>
                </span>
            </div>
            <TimerActionButton
                timerIsRunning={!!props.runningSince}
                onStartClick={handleStartClick}
                onStopClick={handleStopClick}
            />
        </div>
    )
}

export default Timer