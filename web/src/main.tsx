import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {router} from './routes'
import { WatchProvider } from './providers/WatchProvider';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <WatchProvider>
        <RouterProvider router={router} />
      </WatchProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);
