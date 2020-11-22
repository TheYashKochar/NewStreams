import './App.css';
import './components/Navbar';
import './components/Movieitem';
import './components/MovieList';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieList/>
      <center>Created by Yash Kochar</center>
    </div>
  );
}

export default App;
