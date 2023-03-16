import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [title, setTitle] = useState('null');

  useEffect(() => {
    axios.get('http://localhost:3306/api').then((res) => {
      console.log(res.data.title);
      setTitle(() => res.data.title);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </div>
  );
}

export default App;
