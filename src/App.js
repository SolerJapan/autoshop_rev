import './App.css';
import Title from './components/Title';
import React, { useState } from 'react'

function App(props) {


  const [searchServ, setSearchServ] = useState([
    {
      title: "Oil Change",
      cost: "$49.99",
    },
    {
      title: "Brake Rotation",
      cost: "$150.00",
    }
  ]);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    const results = searchServ.filter(service =>
      service.title.toString().toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <header className="App-header">
        <Title
          title="My Auto Shop"
          subHeading="This is my shop"
        />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
          {searchResults.map((val, key) => {
            return (
              <div className="user" key={key}>
                <p>{val.title}, {val.cost}</p>
              </div>
            );
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
