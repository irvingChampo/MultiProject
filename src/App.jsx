import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Home from '../src/pages/Principal/Home';
import Registro from '../src/pages/Registro/Registro';
import AddProduct from './pages/AddProduct/AddProduct';
import ViewAdmin from './pages/Admin/ViewAdmin';
import Categoria from './pages/Categoria/Categoria';
import Producto from './pages/Producto/Producto';
import Ayuda from './pages/Ayuda/Ayuda'

function App() {
  return ( 
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/registro' element={<Registro/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/producto' element={<Producto/>}/>
                <Route path='/categoria' element={<Categoria/>}/>
                <Route path='/add-product' element={<AddProduct/>}/>
                <Route path='/admin' element={<ViewAdmin/>}/>
                <Route path='/ayuda' element={<Ayuda/>}/>
            </Routes>
        </Router>
    </>
   );
}

export default App;