import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './pages/login/Login'
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
