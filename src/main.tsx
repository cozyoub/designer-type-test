import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, ThemeProvider } from '@montage-ui/core';

import App from './App';

import '@montage-ui/core/global.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <ThemeProvider>
      {/* 한글이 단어 중간에서 줄바꿈되지 않도록 */}
      <Global styles={{ body: { wordBreak: 'keep-all' } }} />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
