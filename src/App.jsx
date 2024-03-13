import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Home from '../src/pages/Principal/Home';
import Registro from '../src/pages/Registro/Registro';
import Producto from './pages/Producto/Producto';
import AddProduct from './pages/AddProduct/AddProduct'

function App() {
  return ( 
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Registro' element={<Registro/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Home/Producto' element={<Producto/>}/>
                <Route path='/AddProduct' element={<AddProduct/>}/>
            </Routes>
        </Router>
    </>
   );
}

export default App;