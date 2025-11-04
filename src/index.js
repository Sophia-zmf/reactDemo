import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 导入项目的根组件
import App from './App';
import { Provider } from 'react-redux';
import store from "./store/store"
import Product from './pages/Product'; // 示例
import Catalog from './pages/Catalog';
import Delivery from './pages/Delivery';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Woodentoys from './pages/Woodentoys';
import Stuffedanimals from './pages/Stuffedanimals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<Product />}/>
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/wooden-toys" element={<Woodentoys />}/>
      <Route path="/catalog/stuffed-animals" element={<Stuffedanimals />}/>
      <Route path="/delivery" element={<Delivery />}/>
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  </BrowserRouter>
  </Provider>
);