import { useState, useEffect } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default function Debounce() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // create a array of dummy users data to simulate the search
  const items = [
    { id: 1, title: 'John Doe' },
    { id: 2, title: 'Jane Smith' },
    { id: 3, title: 'Bob Johnson' },
    { id: 4, title: 'Alice Brown' },
    { id: 5, title: 'Charlie James' },
    { id: 6, title: 'Eva Williams' },
    { id: 7, title: 'David Taylor' },
    { id: 8, title: 'Sophia Wilson' },
    { id: 9, title: 'Michael Miller' },
    { id: 10, title: 'Olivia Davis' },
    { id: 11, title: 'Ryan Martinez' },
    { id: 12, title: 'Emma Anderson' },
    { id: 13, title: 'William Harris' },
    { id: 14, title: 'Grace Jackson' },
    { id: 15, title: 'Daniel White' },
    { id: 16, title: 'Ava Brown' },
    { id: 17, title: 'Matthew Clark' },
    { id: 18, title: 'Emily Thompson' },
    { id: 19, title: 'Christopher Davis' },
    { id: 20, title: 'Sophie Hall' },
    { id: 21, title: 'Nicholas Moore' },
    { id: 22, title: 'Lily Wilson' },
    { id: 23, title: 'Andrew Taylor' },
    { id: 24, title: 'Ella Robinson' },
    { id: 25, title: 'James Johnson' },
    { id: 26, title: 'Madison Martin' },
    { id: 27, title: 'Samuel Wilson' },
    { id: 28, title: 'Chloe Thompson' },
    { id: 29, title: 'Benjamin Turner' },
    { id: 30, title: 'Lily Adams' },
  ];

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setLoading(true);
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(debouncedValue.toLowerCase())
    );
    const timeout = setTimeout(() => {
      setResults(filteredItems);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [debouncedValue]);

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="text-xl py-4">Debounce</h1>
      <div>
        <input
          className="border border-gray-500 rounded-md px-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          type="text"
          placeholder="Search users..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="py-4">
        {loading && (
          <svg
            className="w-6 h-6 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <style>
              {`.spinner_P7sC { transform-origin: center; animation: spinner_svv2 .75s infinite linear; } @keyframes spinner_svv2 { 100% { transform: rotate(360deg); } }`}
            </style>
            <path
              className="spinner_P7sC"
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
            />
          </svg>
        )}
        {!loading && results.length > 0 ? (
          <ul className="flex flex-col gap-y-1">
            {results.map((result) => (
              <li
                className="py-0.5 bg-gray-200 px-4 rounded-md text-center"
                key={result.id}
              >
                {result.title}
              </li>
            ))}
          </ul>
        ) : (
          !loading &&
          debouncedValue && (
            <p className="text-gray-600 text-sm text-center">
              No results for{' '}
              <span className="text-black/90 text-base">{debouncedValue}</span>
            </p>
          )
        )}
      </div>
    </div>
  );
}
