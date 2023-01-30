import './styles.css';
import React from 'react';
import { useState } from 'react';


function App() {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <button type="submit" class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
  </div>
  );
}

export default App;
