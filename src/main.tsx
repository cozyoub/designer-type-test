import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@montage-ui/core';

import App from './App';

import '@montage-ui/core/global.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
