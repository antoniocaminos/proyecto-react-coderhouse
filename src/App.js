import './App.css';
import { ItemListContainer } from './Components/ItemListContainer';
import { NavBar } from './Components/NavBar';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import { Cart } from './Components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar /> 
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category:categoryId' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
/* <ItemListContainer texto="Bienvenido Humano!"/> */