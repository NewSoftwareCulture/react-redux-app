import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import actions from './store/actions';
import initStore from './store/store';

const store = initStore();

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    })
  }, [])

  const handleClick = (id) => {
    store.dispatch(actions.taskComlited(id));
  }
  const handleChange = (id) => {
    store.dispatch(actions.titleChanged(id));
  }
  const handleDelete = (id) => {
    store.dispatch(actions.taskDeleted(id));
  }

  return (
    <>
      <h1>Redux tasks</h1>
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            <p>{task.title}</p>
            <p>{`Complited: ${task.complited}`}</p>
            <button onClick={() => handleClick(task.id)}>Complited</button>
            <button onClick={() => handleChange(task.id)}>Change title</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

