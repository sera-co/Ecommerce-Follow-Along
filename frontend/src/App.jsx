
import {Routes,Route} from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';
import Navbar from './components/Navbar/navbar';
import SinglePageProduct from './Pages/SingleProductPage';
import CartPage from './Pages/CartPage';
function App() {
  return (
    <>
      {/* <SignUpPage/> */}
      {/* <LogInPage/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/product-entry-page" element={<ProductEntryPage/>}/>
        <Route path="/update-form/:id" element={<UpdateForm />} />
        <Route path='/product-details/:id' element={<SinglePageProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </>
  )
}
export default App