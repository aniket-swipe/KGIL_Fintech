import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production HTML ships prerendered, so attach to the existing markup. The dev
// server has an empty root, so mount normally there.
if (container.hasChildNodes()) hydrateRoot(container, app);
else createRoot(container).render(app);
