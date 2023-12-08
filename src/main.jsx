import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { DishesApp } from './DishesApp'
import { store } from './store/store';
import { CookiesProvider }  from 'react-cookie';
import './styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools/>
        <Provider store = {store}>
          <BrowserRouter>
            <CookiesProvider>
              <DishesApp />
            </CookiesProvider>
          </BrowserRouter>
        </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
