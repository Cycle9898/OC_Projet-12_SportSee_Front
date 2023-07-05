import React from 'react';
import ReactDOM from 'react-dom/client';
import ProfilePage from './pages/ProfilePage';
import './style/CSS/normalize.css';
import './style/SASS/main.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProfilePage />
  </React.StrictMode>
);
