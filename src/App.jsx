import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CoffeeMenu from './components/CoffeeMenu';
import OrderConfirmation from './components/OrderConfirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<CoffeeMenu />} />
        <Route path="/confirmation" element={<OrderConfirmation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;