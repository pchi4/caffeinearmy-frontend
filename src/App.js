import LoginComponent from './components/login/LoginComponent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/home/HomeComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginComponent/>}></Route>
        <Route exact path='/home' element={<HomeComponent/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
