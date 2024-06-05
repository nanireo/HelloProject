import React, { useState } from 'react';
import axios from 'axios';

function Helloproject() {
  const [data, setData] = useState(null);

  const apiUrl = process.env.REACT_APP_RENDER_SERVER || 'https://helloproject.onrender.com/api/hello';  
  console.log('apiUrl:', apiUrl);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Project</h1>
        <button onClick={fetchData}>click me</button>
        {data && (
          <div>
            <h2>My Self</h2>
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
