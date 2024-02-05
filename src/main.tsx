import * as React from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import * as ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import LoadingIndicator from './components/loadingIndicator/LoadingIndicator';

// ----------------------------------------------------------------------
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  }
});

ReactDOM.render(<HelmetProvider>
  <BrowserRouter>
    <Suspense fallback={<LoadingIndicator/>}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Suspense>
  </BrowserRouter>
</HelmetProvider>,
  document.getElementById('root'));

