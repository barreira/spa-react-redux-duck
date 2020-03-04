import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Main from './pages';

export default class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
