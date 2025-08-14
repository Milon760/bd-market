import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import AllContext from './context/AllContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllContext>
      <RouterProvider router={router}/>
    </AllContext>
  </StrictMode>
);
