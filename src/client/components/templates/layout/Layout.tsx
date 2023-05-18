import { APP_NAME } from '@shared/constants/config';
import Head from 'next/head';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }): ReactElement => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="dns-prefetch" href="" />
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="" />
        <meta name="twitter:card" content="" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <title>{APP_NAME}</title>
      </Head>

      <Wrap>{children}</Wrap>

      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  overflow: auto;
`;
