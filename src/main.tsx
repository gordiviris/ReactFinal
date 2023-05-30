import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Products } from './components/Products.tsx';
import Home from './components/Home';
import ProductPage from './components/ProductPage'
import { ThemeProvider } from './ThemeContext.tsx';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<Products />}/>
              <Route path="products/:productId" element={<ProductPage />} />
              <Route path="*" element={<div>Route not found</div>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
)
