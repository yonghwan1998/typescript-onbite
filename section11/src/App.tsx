import React, { useContext, useEffect, useReducer, useRef } from 'react';
import './App.css';
import Editor from './components/Editor';
import { Todo } from './types';
import ToDoItem from './components/ToDoItem';

type Action = {
  type: 'CREATE',
  data: {
    id: number,
    content: string,
  };
} | {
  type: 'DELETE',
  id: number,
}

function reducer(state: Todo[], aciton: Action) {
  switch(aciton.type) {
    case 'CREATE': {
      return [...state, aciton.data];
    }
    case 'DELETE': {
      return state.filter((it) => it.id !== aciton.id);
    }
  }
}

export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickDelete: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if(!dispatch) throw new Error('TodoDispatchContext error...');
  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        content: text,
      }
    });
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const onClickDelete = (id: number) => {
    dispatch({
      type: 'DELETE',
      id: id,
    });
  }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickDelete,
          }}
        >
          <Editor/>
          <div>
            {todos.map((todo) => (
              <ToDoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
