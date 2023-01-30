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
    <div className="App">
      <p>{data} yesing</p>
    </div>
  );
}

export default App;
