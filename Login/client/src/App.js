import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Join from './pages/Join';
import User from './pages/User';
import About from './pages/About';
import LoginContextProvider from './contexts/LoginContextProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="/join" element={<Join/>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  );
}

export default App;
