import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { login } from './service.js';
import './LoginPage.css';
import { useDispatch } from 'react-redux';
import { authLoginSuccess } from '../../store/actions.js';

const LoginPage = ({ onLogin, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => setEmail(event.target.value);
  const handleChangePassword = (event) => setPassword(event.target.value);
  const resetError = () => setError(null);

  const handleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsFetching(true);
      await login({ email, password }, rememberMe);
      dispatch(authLoginSuccess());
      const to = location.state?.from?.pathname || '/';
      navigate(to, { replace: true });
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  const isButtonEnabled = () => email.length && password.length && !isFetching;

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
          <input type="password" name="password" onChange={handleChangePassword} value={password} />
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
