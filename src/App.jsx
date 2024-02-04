import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1
        style={{
          marginBottom: '0.5rem',
        }}
      >
        Frontend Machine Coding Challenges
      </h1>
      <p>
        This is a collection of frontend machine coding challenges. These are
        helpful for practicing and improving your frontend development skills.
      </p>
      <div>
        <h4
          style={{
            marginTop: '2rem',
          }}
        >
          Challenges
        </h4>
        <ul
          style={{
            padding: 20,
            margin: 0,
          }}
        >
          <li>
            <Link
              style={{
                color: 'black',
              }}
              to="/todolist"
            >
              Todo List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
