import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import './LoginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin, uiResetError } from '../../store/actions.js';
import { getUi } from '../../store/selectors.js';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { isLoading, error } = useSelector(getUi);

  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);

  const resetError = () => dispatch(uiResetError());
  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('1');
    await dispatch(authLogin({ email, password }, rememberMe));
    console.log('2');

    const to = location.state?.from?.pathname || '/';
    navigate(to, { replace: true });
    console.log('3');
  };

  const isButtonEnabled = () => email.length && password.length && !isLoading;

  return (
    <div className="form-page-container">
      <h1>Bienvenido@ a Wakapop</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="email-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChangeEmail}
            value={email}
            autoFocus
          />
        </div>
        <div className="password-form">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChangePassword}
            value={password}
          />
        </div>

        <div className="rememberMe-form">
          <label htmlFor="rememberMe">Recuérdame</label>
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            onChange={handleRememberMe}
            checked={rememberMe}
          />
        </div>
        <div className="submit-form">
          <button type="submit" disabled={!isButtonEnabled()}>
            Login
          </button>
        </div>
      </form>
      {error && (
        <div className="error-message" onClick={resetError}>
          {error.message}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
