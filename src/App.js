import { useState } from 'react';
import './App.css';
import AdvertsPage from './components/adverts/AdvertsPage.js';
import LoginPage from './components/auth/LoginPage.js';
import { logout } from './components/auth/service.js';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import AdvertPage from './components/adverts/AdvertPage.js';
import NewAdvertPage from './components/adverts/NewAdvertPage.js';
import RequireAuth from './components/auth/RequireAuth.js';
import Layout from './components/layout/Layout.js';
import './App.css';

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    logout();
    setIsLogged(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        <Route
          path="/adverts"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertsPage onLogout={handleLogout} />
            </RequireAuth>
          }
        />

        <Route
          path="/adverts/:id"
          element={
            <RequireAuth isLogged={isLogged}>
              <AdvertPage onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route
          path="/adverts/new"
          element={
            <RequireAuth isLogged={isLogged}>
              <NewAdvertPage onLogout={handleLogout} />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/adverts" />} />

        <Route
          path="/404"
          element={
            <div>
              <Layout>
                <div className="not-found">
                  <p>
                    <strong>Error 404</strong>: la dirección que has pedido no existe.{' '}
                  </p>
                  <p>
                    Por favor, verifica la url o
                    <Link to="/adverts"> vuelve al listado de anuncios</Link>
                  </p>
                </div>
              </Layout>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
