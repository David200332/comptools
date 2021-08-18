import './App.css';
import React, {useState, useEffect} from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import Content from './components/Content/Content.jsx'

function App() {

  const [fields, setfields] = useState(null)
  
  useEffect(() => {
    fetch("http://localhost:5000/fields")
      .then( res => { 
        return res.json()
      })
      .then( data => {
        setfields(data)
      })
  }, [])
  
  return (
    <div className="App">
      <NavBar></NavBar>
      {fields === null ? <p>Loading</p> : <Content data={fields} ></Content>}
    </div>
  );
}

export default App;
