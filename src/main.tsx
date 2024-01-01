import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';
import { LanguageProvider } from './store/LanguageContext.tsx';
import { Toaster } from 'react-hot-toast';
import './index.css';
import './cards.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <Toaster position='bottom-right' />
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  rootElement
);
