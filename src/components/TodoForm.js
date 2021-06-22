import React, {useState, useEffect, useRef} from 'react'
import useStyles from '../styles';

function TodoForm(props) {
    const classes = useStyles();
    const [input, setInput] = useState('');

    const focus = useRef(null);

    useEffect(() => {
        focus.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    }
    return (
        <form className = "todo-form" onSubmit={handleSubmit}>
            <input placeholder='Add a todo' value = {input} name = 'text' className = {classes.todoInput} onChange={handleChange} ref={focus}/>
            <button className = {classes.todoButton}>Add ToDo</button>
        </form>
    )
}

export default TodoForm;
