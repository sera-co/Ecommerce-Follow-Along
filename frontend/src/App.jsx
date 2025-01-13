
import {Routes,Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProductEntryPage from './Pages/ProductEntryPage';
import UpdateForm from './Pages/UpdateForm';
import Navbar from './components/Navbar/navbar';
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
      </Routes>
    </>
  )
}
export default App