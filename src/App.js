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
import SignupPharmapage from './pages/signupPharma';
import PharDashboardpage from './pages/PharDashboard';
import Phardetail from './pages/Phardetail';
import PharAccess from './pages/PharAccess';
import PharUpload from './pages/PharUpload';
import SignupLabpage from './pages/SignupLab';
import LabDashboardpage from './pages/LabDashboard';
import Labdetail from './pages/Labdetail';
import LabAccess from './pages/LabAccess';
import LabUploadpage from './pages/LabUpload';




function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/signup' element={<SigninPage/>} />
          <Route path='/signupDoc' element={<SignupdocPage/>} />
          <Route path='/signupPharma' element={<SignupPharmapage/>} />
          <Route path= '/SignupLab' element={<SignupLabpage/>} />

          <Route path='/DocDashboard' element={<DocDashboard/>} />
          <Route path='/PatDashboard' element={<PatDashboard/>} />
          <Route path='/PharmaDashboard' element={<PharDashboardpage/>} />
          <Route path='/LabDashboard' element={<LabDashboardpage/>} />

          <Route path='/Docdetail' element={<Docdetail/>} />
          <Route path='/Patdetail' element={<Patdetail/>} />
          <Route path='/Pharmadetail' element={<Phardetail />} />
          <Route path='/Labdetail' element={<Labdetail />} />


          <Route path='/accessRec' element={<Docaccess/>} />
          <Route path='/accessPrec' element={<Pataccess/>} />
          <Route path='/PharmaAccess' element={<PharAccess />} />
          <Route path='/LabaccessRec' element={<LabAccess />} />

          <Route path='/graRev' element={<Grantrevoke/>} />

          <Route path='/Uploadrec' element={<DocUpload/>} />
          <Route path='/UploadPrec' element={<PatUpload/>} />
          <Route path='/PharmaUpload' element={<PharUpload />} />
          <Route path='/LabUploadrec' element={<LabUploadpage />} />
          
          <Route path='/logout' element={<Home/>} />       
        
        </Routes>      
    </Router>
  );
}

export default App;
