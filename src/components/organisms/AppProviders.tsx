import { QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';
import { queryClient } from 'src/lib/react-query';

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProviders;
