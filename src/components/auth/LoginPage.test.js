import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultState } from '../../store/reducers.js';
import LoginPage from './LoginPage.js';
import { authLogin } from '../../store/actions.js';

jest.mock('../../store/actions.js');

describe('LoginPage', () => {
  const store = {
    getState: () => defaultState,
    dispatch: () => {},
    subscribe: () => {},
  };

  const renderComponent = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

  test('snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  test('should dispatch "authLogin" action', async () => {
    const email = 'test@test.com';
    const password = 'prueba';
    const rememberMe = false;

    renderComponent();
    const emailInput = screen.getByLabelText(/Email/);
    const passwordInput = screen.getByLabelText(/Contraseña/);
    const submitButton = screen.getByRole('button');

    expect(submitButton).toBeDisabled();

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);
    expect(authLogin).toHaveBeenCalled();
    expect(authLogin).toHaveBeenCalledWith({ email, password }, rememberMe);
  });
});
