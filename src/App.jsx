import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Home from '../src/pages/Principal/Home';
import Registro from '../src/pages/Registro/Registro';
import Producto from './pages/Producto/Producto';
import AddProduct from './pages/AddProduct/AddProduct'
import ViewAdmin from './pages/Admin/ViewAdmin';
import Categoria from './pages/Categoria/Categoria';

function App() {
  return ( 
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/Registro' element={<Registro/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Home/Producto' element={<Producto/>}/>
                <Route path='/Categoria' element={<Categoria/>}/>
                <Route path='/AddProduct' element={<AddProduct/>}/>
                <Route path='/Admin' element={<ViewAdmin/>}/>
            </Routes>
        </Router>
    </>
   );
}

export default App;