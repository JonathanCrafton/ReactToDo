import TodoList from './components/TodoList.js';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.todoApp}>
     <TodoList />
    </div>
  );
}

export default App;
