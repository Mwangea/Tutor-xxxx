import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import App from './App.tsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    <Analytics />
    </HelmetProvider>
  </StrictMode>
);