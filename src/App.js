import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StructuredData from './StructuredData';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<NotFound/>} />
          </Routes>   
      </Router>
    
       <StructuredData />
    </div>
  );
}

export default App;
