
import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/cardList/CardList';
import SearchBox from './components/searchBox/SearchBox';

function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchData = async() => {
      const response = await fetch(url);
      const data = await response.json();
      setMonsters(data);
    };
    fetchData();
  }, []);

    const filterMonsters = monsters.filter(
      monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleChange = e => {
      setSearchField(e.target.value);
    }

  return (
    <div className="App">
      <h1>Monsters</h1>
      <SearchBox 
        placeholder='search monsters' 
        handleChange={handleChange}
       />
      <CardList monsters={filterMonsters} />      
    </div>
  );
}

export default App;
