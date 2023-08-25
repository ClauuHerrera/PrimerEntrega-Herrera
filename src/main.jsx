import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categorias from './Pages/Categorias.jsx';
import NavBar from './components/NavBar.jsx';
import ItemsListContainer from './components/ItemsListContainer.jsx';
import ItemsDetailContainer from './components/ItemsDetailContainer.jsx';
import { Navbar } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>} />
      <Route path="/categorias" element={<Categorias />} />
      <Route exact path="/category/:id" element={<><NavBar/><ItemsListContainer/></>}/>
      <Route path="/itemsnew/:id" element={<><Navbar/><ItemsDetailContainer/></>}/>
      
     
    </Routes>
    </BrowserRouter>

   
  </React.StrictMode>,
)
