import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './config/routeConfig';
import PrivateRoute from './PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import StructuredData from './StructuredData';
import NotFound from './pages/NotFound';
import Login from './pages/auth/Login';
import Home from './pages/Home';
import Signup from './pages/auth/Signup';
import { useSelector } from 'react-redux';

import './App.css';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* public routes */}
          <Route exact path="/" element={<Home />} /> 
          {/* Show the login page only if the user is not authenticated */}
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />   
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login />}
          />  
          <Route
             path="/signup"
             element={isAuthenticated ? <Navigate to="/" /> : <Signup />}
          />  
          
          {/* private routes */}
          <Route element={<PrivateRoute />}>
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
      <StructuredData />
    </div>
  );
}

export default App;
