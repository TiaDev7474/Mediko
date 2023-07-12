import React  from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss'
import Dashboard from './pages/Dashboard';
import Notification from './components/Notification';
import { ActionForm } from './components/ActionForm';
import HomeLayout from './layout/HomeLayout';
import ListView from './layout/ListView';

function App() {


  return ( 
    <React.Fragment>
          <Router>
               <Routes>
                    <Route path='/'  element={<Dashboard/>} >
                         <Route path='/' element={<HomeLayout/>}>
                               <Route index element={<ListView/>}/>
                               <Route path=':action' element={<ActionForm/>} />
                         </Route>
                         <Route path='notification' element={<Notification/>}/>
                    </Route>
               </Routes>
          </Router>
    </React.Fragment>
  )
}

export default App
