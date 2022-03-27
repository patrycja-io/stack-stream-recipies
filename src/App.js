import {BrowserRouter, Route, Routes } from 'react-router-dom'

//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'


import './App.css'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="create" element={<Create/>}/>
        <Route exact path="recipe/:id"  element={ <Recipe/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App
