import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
// Font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

library.add(fab, faCheckSquare, faCoffee);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Rotas />
    </QueryClientProvider>
  </BrowserRouter>
);
