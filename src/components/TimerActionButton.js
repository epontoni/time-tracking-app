const TimerActionButton = (props) => {
    if (props.timerIsRunning) {
        return (
            <button
                className='btnStop'
                onClick={props.onStopClick}
            >
                Stop
            </button>
        )
    } else {
        return (
            <button
                className='btn'
                onClick={props.onStartClick}
            >
                Start
            </button>
        )
    }
}

export default TimerActionButton