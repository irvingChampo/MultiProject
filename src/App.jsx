import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/User/Login/Login';
import Home from '../src/pages/User/Principal/Home';
import Registro from '../src/pages/User/Registro/Registro';
import Chat from './components/pages/Chat/mensajes';
import AddProduct from './pages/Admins/AddProduct/AddProduct';
import Modificar from './pages/Admins/ModificarProducto/Modificar'
import ViewAdmin from './pages/Admins/Admin/ViewAdmin';
import Tabla from './pages/Admins/Pedidos/Tabla';
import Ayuda from './pages/User/Ayuda/Ayuda';
import Producto from './pages/User/Producto/Producto';
import Carrito from './pages/User/Carrito/Carrito'
import Aluminio from './pages/User/Categoria/Aluminio/Aluminio'
import Bolsa from './pages/User/Categoria/Plastico(Bolsa)/Bolsas'
import Pet from './pages/User/Categoria/Plastico(Pet)/Pet'
import Llantas from './pages/User/Categoria/Llantas/Llantas'
import './index.css'
function App() {
  return ( 
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/registro' element={<Registro/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/home/producto' element={<Producto/>}/>
                <Route path='/add-product' element={<AddProduct/>}/>
                <Route path='/modificar-producto' element={<Modificar/>}/>
                <Route path='/admin' element={<ViewAdmin/>}/>
                <Route path='/ayuda' element={<Ayuda/>}/>
                <Route path='/chat' element={<Chat/>}/>
                <Route path='/pedidos' element={<Tabla/>}/>
                <Route path='/carrito' element={<Carrito/>}/>
                <Route path='/Aluminio' element={<Aluminio/>}/>
                <Route path='/Bolsa' element={<Bolsa/>}/>
                <Route path='/Pet' element={<Pet/>}/>
                <Route path='/Llantas' element={<Llantas/>}/>
            </Routes>
        </Router>
    </>
   );
}

export default App;