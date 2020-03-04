import * as React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// const App = () => (
//   <Provider store={store}>
//     <Main />
//   </Provider>
// )

export class App extends React.PureComponent {
  render() {
    return <Provider store={store}>APP</Provider>;
  }
}
