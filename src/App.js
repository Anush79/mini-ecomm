
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import HotToast from './components/ToasterContainer';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Products />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <HotToast/>
    </div>
   
  );
}

export default App;
