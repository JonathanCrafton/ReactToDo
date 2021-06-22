import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import {Typography, Container, Button, Grid} from '@material-ui/core'

import useStyles from '../styles';

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const classes = useStyles();
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    };
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, index) => (
        <Grid alignItems='right'>
            <div className = {todo.isComplete ? classes.todoRowComplete : classes.todoRow} key={index}>
                <div key={todo.id} onClick = {() => completeTodo(todo.id)}>
                    {todo.text}
                    <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className = {classes.deleteIcon}/>
                    <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})} className = {classes.editIcon}/>
                </div>
            </div>
        </Grid>
    ));
};

export default Todo
