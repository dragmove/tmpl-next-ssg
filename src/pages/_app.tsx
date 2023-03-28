import Layout from '@client/components/templates/layout/Layout';
import GlobalStyle from '@client/styles/GlobalStyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

/**
 * @see https://nextjs.org/docs/basic-features/layouts#with-typescript
 */
const App = ({ Component, pageProps }: AppPropsWithLayout): ReactElement => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  // TODO: add redux Provider
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />

        {getLayout(<Component {...pageProps} />)}

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
};

export default App;
