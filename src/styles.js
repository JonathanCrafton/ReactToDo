import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    todoApp:{
        background: '#121858',
        height: '100vh',
        minHeight: '100vh',
        padding: 10,
        color: 'orange'
    },
    todoInput:{

    },
    todoButton:{
        marginLeft: 10,
    },
    deleteIcon:{
        background: '#121858',
        padding: 5,
        marginLeft: 5,
        color: '#ffa733'
    },
    editIcon:{
        background: '#121858',
        padding: 5,
        marginLeft: 5,
        color: '#ffa733'
    },
    todoRowComplete:{
        background: '#ffa733',
        margin: 5,
        padding: 5,
        color: '#121858',
        fontSize: 24,
        alignItems: 'center',
        textDecoration: 'line-through'
    },
    todoRow:{
        background: '#ffa733',
        margin: 5,
        padding: 5,
        color: 'black'
    },
    typo:{
        fontSize: 48
    }

}));