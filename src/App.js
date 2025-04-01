import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MoviesGrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <MovieGrid></MovieGrid>
      <footer className='footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
