import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetails } from './pages/ProductDetails';
import { Services } from './pages/Services';
import { Checkout } from './pages/Checkout';
import { About } from './pages/About';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="loja" element={<Shop />} />
            <Route path="produto/:id" element={<ProductDetails />} />
            <Route path="assistencia" element={<Services />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="sobre" element={<About />} />
            <Route path="contato" element={<div className="p-20 text-center">Página de Contato (Use os dados do rodapé)</div>} />
            <Route path="politicas" element={<div className="p-20 text-center">Políticas e Termos</div>} />
            <Route path="login" element={<div className="p-20 text-center">Login / Área do Cliente</div>} />
            <Route path="*" element={<div className="p-20 text-center">Página não encontrada</div>} />
          </Route>
        </Routes>
      </HashRouter>
    </CartProvider>
  );
}

export default App;
