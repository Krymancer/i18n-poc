import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './internationalization';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<>Loading...</>}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
