import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import About from './pages/About'
export default function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/profile" element={<Profile/>}></Route>
         <Route path="/signin" element={<Signin/>}></Route>
         <Route path="/signup" element={<Signup/>}></Route>
         <Route path="/about" element={<About/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}