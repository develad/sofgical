import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import BasePageLayout from './layoutes/BasePageLayout.jsx';
import { AppProvider } from './context/AppContext.jsx';

import Home from './pages/Home.jsx';
import Donuts from './pages/Donuts.jsx';
import History from './pages/History.jsx';
import AddUserPage from './pages/AddUser.jsx';

import './index.css';
import Welcome from './pages/Welcome.jsx';
import AppLayout from './layoutes/AppLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <AppLayout>
          <BasePageLayout>
            <Routes>
              <Route
                path="/"
                element={<Welcome />}
              />
              <Route
                path="/home"
                element={<Home />}
              />
              <Route
                path="/donuts"
                element={<Donuts />}
              />
              <Route
                path="/history"
                element={<History />}
              />
              <Route
                path="/add-user"
                element={<AddUserPage />}
              />
              <Route
                path="*"
                element={<Home />}
              />
            </Routes>
          </BasePageLayout>
        </AppLayout>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
