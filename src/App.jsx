import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { SignUp } from './components/SignUp/SignUp'
import { SignIn } from './components/SignIn/SignIn';

function App() {
  const [data, setData] = useState({})
  console.log(data);

  return (
    <div className='main '>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp data={data} setData={setData}/>}/>
        <Route path='SignIn' element={<SignIn data={data} setData={setData}/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
