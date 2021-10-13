import { useState } from 'react'
import './TimerForm.css'

const TimerForm = (props) => {
    const [title, setTitle] = useState(props.title || '')
    const [project, setProject] = useState(props.project || '')
    const submitText = props.id ? 'Update' : 'Create' // Usamos la id para determinar si el objecto fue creado

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleProjectChange = (e) => {
        setProject(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Creando/Actualizando timer...')
        const newTimer = {
            id: props.id,
            title: title,
            project: project
        }
        console.log('submiting... ', newTimer)
        props.onFormSubmit(newTimer)
    }
    
    /*const handleCancel = (e) => {
        e.preventDefault()
        console.log('Cancelando timer...')
        props.onFormClose()
    }*/

    return (
        <div className="timerForm">
            <form onSubmit={ e => e.preventDefault() }>
                <div className='field'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className='field'>
                    <label>Project</label>
                    <input
                        type='text'
                        value={project}
                        onChange={handleProjectChange}
                    />
                </div>
                <div className='actions'>
                    <button
                        className='update'
                        onClick={handleSubmit}
                    >
                        {submitText}
                    </button>
                    <button
                        className='cancel'
                        onClick={props.onFormClose}
                    >
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    )
}

export default TimerForm