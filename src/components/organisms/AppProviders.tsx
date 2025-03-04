import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { queryClient } from '~src/lib/react-query';
import { BrowserRouter } from 'react-router-dom';
const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};

export default AppProviders;
