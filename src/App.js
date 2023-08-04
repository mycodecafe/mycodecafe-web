import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar/NavBar';
import StructuredData from './StructuredData';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
       <NavBar/>
       <Home/>
       <StructuredData />
    </div>
  );
}

export default App;
