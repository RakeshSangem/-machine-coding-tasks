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
    <div>
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

      <ul
        style={{
          padding: 10,
          listStyle: 'none',
        }}
      >
        {tasks.map((task) => {
          return (
            <span
              key={task.id}
              style={{
                display: 'flex',
                gap: 10,
              }}
            >
              <li>
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
            </span>
          );
        })}
      </ul>
    </div>
  );
}
