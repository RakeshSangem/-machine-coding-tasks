import { useState } from 'react';

export default function Todolist() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime().toString().slice(10),
      text: value,
    };
    if (value) setTasks((prev) => [...prev, newTask]);
  };

  const deleteTodo = (key) => {
    setTasks((prev) => prev.filter((item) => item.id !== key.id));
  };

  return (
    <div
      style={{
        borderStyle: 'dashed',
        padding: 30,
        borderRadius: 10,
      }}
    >
      <h1>Todolist</h1>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
        onSubmit={onSubmitHandler}
      >
        <input
          style={{
            margin: 10,
          }}
          type="text"
          name="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h5>todos</h5>
      <ul
        style={{
          listStyle: 'none',
        }}
      >
        {tasks.length !== 0 ? (
          tasks.map((task) => {
            return (
              <li
                key={task.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    margin: 10,
                  }}
                >
                  {task.id}
                </span>
                {task.text}
                <button
                  style={{
                    margin: 10,
                  }}
                  onClick={() => deleteTodo(task)}
                >
                  remove
                </button>
              </li>
            );
          })
        ) : (
          <p
            style={{
              padding: 10,
            }}
          >
            You have no todos
          </p>
        )}
      </ul>
    </div>
  );
}
