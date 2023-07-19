import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import StructuredData from './StructuredData';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       <StructuredData />
    </div>
  );
}

export default App;
