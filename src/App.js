import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Products from './components/Products/Products';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout><Home /></Layout>}/>
    <Route path='/aboutus' element={<Layout><Aboutus /></Layout>}/>
    <Route path='/contactus' element={<Layout><Contactus /></Layout>}/>
    <Route path='/products' element={<Layout><Products /></Layout>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
