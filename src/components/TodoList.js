import React, {useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import {Container, Typography, Button, Grid} from '@material-ui/core'

import useStyles from '../styles';

function TodoList() {
    const classes = useStyles();
    const[todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        
    };

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <Container>
            <Grid>
                <div>
                    <Typography className={classes.typo} align='center'>What's the Plan for Today?</Typography>
                    <TodoForm onSubmit={addTodo}/>
                    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
                </div>
            </Grid>
        </Container>
    )
}

export default TodoList
