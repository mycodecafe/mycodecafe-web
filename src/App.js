import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Routes, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './components/NavBar/NavBar';
import StructuredData from './StructuredData';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/NotFound';
import './App.css';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if(user){
    console.log("hit===================", user)
  }

  return (
    <div className="App">
      <Router>
          {/* <NavBar /> */}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>   
      </Router>
    
       <StructuredData />
    </div>
  );
}

export default App;
