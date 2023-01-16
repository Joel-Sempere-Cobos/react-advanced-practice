import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

export default function Root({ store, children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );
}
