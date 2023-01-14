import './App.css';
import { Navbar } from './coms/Navbar';
import { Main } from './coms/Main';
import { Content } from './coms/Content';
import { Footer } from './coms/Footer';
import { SearchBar } from './coms/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <SearchBar/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
