import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { store } from './store'
import Pagination from './components/Pagination/Pagination';
import NavBar from './ui/Navbar';
import Home from './pages/Home';
import LiveChat from './components/live-chat/LiveChat';
import SearchUI from './components/search-ui/SearchUi';
import Toaster from './components/toaster';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
          <Route path="/live-chat" element={<LiveChat />}></Route>
          <Route path="/search-ui" element={<SearchUI />}></Route>
          <Route path="/toaster" element={<Toaster />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);
