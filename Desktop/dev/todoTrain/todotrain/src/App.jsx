import Todo from './components/Todo/Todo';
import './App.css';
import Form from './components/Form/Form';
import FilterButton from './components/FilterButton/FilterButton';  

function App(props) {

  const taskList = props.tasks?.map((task) => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />
  ));
  const filter = props.filter.map((filter) => (
    <FilterButton key={filter.id} id={filter.id} name={filter.name} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoLeLoup</h1>
      <Form />
      <FilterButton key={filter.id} id={filter.id} name={filter.name} />
      <FilterButton key={filter.id} id={filter.id} name={filter.name}/>
      <FilterButton key={filter.id} id={filter.id} name={filter.name}/>
      <h2 id="list-heading">{props.tasks.filter(task => !task.completed).length} tâches restantes</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList} 
      </ul>
    </div>
  );
}

export default App;
