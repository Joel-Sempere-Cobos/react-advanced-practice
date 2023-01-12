import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children, onLogout, ...props }) => {
  const [confirmLogout, setConfirmLogout] = useState(false);

  const askLogoutConfirmation = () => {
    setConfirmLogout(!confirmLogout);
  };
  return (
    <div>
      <header className="header">
        <div>
          <Link className="header-logo" to="/adverts">
            <strong>WAKAPOP</strong>
          </Link>
        </div>
        <div className="header-navbar">
          <NavLink className="navlinks" to="/adverts" end>
            Listado de Anuncios
          </NavLink>
          <NavLink className="navlinks" to="/adverts/new">
            Crear Anuncio
          </NavLink>
        </div>
        <div className="header-logout">
          {confirmLogout && (
            <div>
              ¿Seguro que hacer logout?{' '}
              <div>
                <button onClick={onLogout}>Sí</button>
              </div>
              <div>
                <button onClick={askLogoutConfirmation}>No</button>
              </div>
            </div>
          )}
          {!confirmLogout && <button onClick={askLogoutConfirmation}>Logout</button>}
        </div>
      </header>
      {children}
      <footer className="footer">Joël Sempere Cobos 2022</footer>
    </div>
  );
};

export default Layout;
