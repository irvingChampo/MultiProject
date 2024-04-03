import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Home from '../src/pages/User/Principal/Home';
import Registro from '../src/pages/User/Registro/Registro';
import Chat from './components/pages/Chat/mensajes';
import AddProduct from './pages/Admins/AddProduct/AddProduct';
import ViewAdmin from './pages/Admins/Admin/ViewAdmin';
import Tabla from './pages/Admins/Pedidos/Tabla';
import Ayuda from './pages/User/Ayuda/Ayuda';
import Categoria from './pages/User/Categoria/Categoria';
import Producto from './pages/User/Producto/Producto';
import Carrito from './pages/User/Carrito/Carrito'

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
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/pedidos' element={<Tabla/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
            </Routes>
        </Router>
    </>
   );
}

export default App;