import { queryClient } from '@/client/utils/remote';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from '@client/components/templates/layout/Layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode, StrictMode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// @see https://nextjs.org/docs/basic-features/layouts#with-typescript
const App = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  // TODO: add redux Provider
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />

        {getLayout(<Component {...pageProps} />)}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
