import React from 'react';
import './App.css';

// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import { Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import DocDashboard from './pages/DocDashboard';
import PatDashboard from './pages/PatDashboard';
import SignupDoc from './pages/signupDoc';
import SignupdocPage from './pages/signupDoc';
import Docdetail from './pages/Docdetail';
import Patdetail from './pages/Patdetail';
import Docaccess from './pages/Docaccess';
import Grantrevoke from './pages/Grantrevoke';
import DocUpload from './pages/DocUpload';
import PatUpload from './pages/PatUpload';
import Pataccess from './pages/Pataccess';



function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SigninPage/>} />
          <Route path='/signupDoc' element={<SignupdocPage/>} />
          <Route path='/DocDashboard' element={<DocDashboard/>} />
          <Route path='/PatDashboard' element={<PatDashboard/>} />
          <Route path='/Docdetail' element={<Docdetail/>} />
          <Route path='/Patdetail' element={<Patdetail/>} />
          <Route path='/accessRec' element={<Docaccess/>} />
          <Route path='/accessPrec' element={<Pataccess/>} />
          <Route path='/graRev' element={<Grantrevoke/>} />
          <Route path='/Uploadrec' element={<DocUpload/>} />
          <Route path='/UploadPrec' element={<PatUpload/>} />
          <Route path='/logout' element={<Home/>} />
      </Routes>      
    </Router>
  );
}

export default App;
