import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Home/Purchase';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/purchase/:id' element={<Purchase></Purchase>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
