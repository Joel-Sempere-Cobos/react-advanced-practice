import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { defaultState } from '../../store/reducers.js';
import LoginPage from './LoginPage.js';

describe('LoginPage', () => {
  test('snapshot', () => {
    const store = {
      getState: () => defaultState,
      dispatch: () => {},
      subscribe: () => {},
    };

    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
