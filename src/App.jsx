import { Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './services/auth';
import HomeComponent from './components/home/HomeComponent';
import LoginComponent from './components/login/LoginComponent';
import './App.css';

function App() {

  const PrivateRoute = ({element: Element, ...rest}) => {
    return isAuthenticated ? <Navigate to='/home' /> : <LoginComponent/> 
  }
    
  return (
    <Routes>
      <Route exact path='/' element={<PrivateRoute isAuthenticated={false} />} />
      <Route exact path='/home' element={<HomeComponent/>} />
    </Routes>
  );
}

export default App;
