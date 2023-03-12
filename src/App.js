import './App.css';
import { Navbar } from './coms/Navbar';
import { Main } from './coms/Main';
import { Content } from './coms/Content';
import { Footer } from './coms/Footer';
import { SearchBar } from './coms/SearchBar';
import { useState, useEffect } from 'react';
import { SearchResults } from './coms/SearchResults';

function App() {
  var [searchV_$, setSearchV_$] = useState([])
  var [allPokemons_$, setAllPokemons_$] = useState([])
  var [ResultsTrig_$, setTrig_$] = useState(false)
  var [scroll_$, setScroll_$] = useState(0)
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1279').then(res=>res.json()).then(res=>setAllPokemons_$(res.results))
  },[])

  
  return (
    <div className="App">
      <Navbar/>
      <Main searchV_$={searchV_$} setSearchV_$={setSearchV_$} allPokemons_$={allPokemons_$} setTrig_$={setTrig_$} ResultsTrig_$={ResultsTrig_$} setScroll_$={setScroll_$}/>
      <SearchResults searchV_$={searchV_$} ResultsTrig_$={ResultsTrig_$} scroll_$={scroll_$}/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
