import logo from './logo.svg';
import './App.css';
import './styles.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
      </div>
      <footer className='footer'>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
