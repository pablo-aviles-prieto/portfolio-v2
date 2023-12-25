import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { LanguageProvider } from './store/LanguageContext.tsx';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  rootElement
);
