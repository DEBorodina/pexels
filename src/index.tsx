import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { Router } from "./routes/Router";
import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/rootReducer";
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools( applyMiddleware(saga)));

saga.run(sagaWatcher);

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
