import LogInPage from "./components/aunthenticate/LogIn"
import SignUpPage from "./components/aunthenticate/SignUp"
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
      {/* <SignUpPage/> */}
      {/* <LogInPage/> */}
      <Routes>
        <Route path='/'/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
      </Routes>
    </>
  )
}
export default App