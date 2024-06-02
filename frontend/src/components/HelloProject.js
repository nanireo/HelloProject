import React, { useState } from 'react';
import axios from 'axios';
// import './App.css';

function Helloproject() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://helloproject.onrender.com/api/hello');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Project</h1>
        <button onClick={fetchData}>Fetch Data</button>
        {data && (
          <div>
            <h2>My Slef</h2>
            <ul>
              {data.map((item) => (
                <li key={item._id}>
                  <h3>{item.Name}</h3>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Helloproject;
