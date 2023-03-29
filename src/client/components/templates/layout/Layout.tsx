import Head from 'next/head';
import { ReactElement, PropsWithChildren, FC, useRef } from 'react';
import styled from 'styled-components';
import { APP_NAME } from '@shared/constants/config';
import { Dot } from '../../atoms/shape/Dot';

interface Props {}

const Layout: FC<PropsWithChildren<Props>> = ({ children }): ReactElement => {
  const appNodeRef = useRef<HTMLDivElement | null>(null);

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

      <Wrap
        ref={appNodeRef}
        // style={{ width: windowSize.width, height: windowSize.height }}
      >
        <Dot
          radius={2}
          left="18px"
          top="18px"
          backgroundColor={'#fff'}
          opacity={0.25}
        />
        <Dot
          radius={2}
          right="18px"
          top="18px"
          backgroundColor={'#fff'}
          opacity={0.25}
        />
        <Dot
          radius={2}
          right="18px"
          bottom="18px"
          backgroundColor={'#fff'}
          opacity={0.25}
        />
        <Dot
          radius={2}
          left="18px"
          bottom="18px"
          backgroundColor={'#fff'}
          opacity={0.25}
        />

        {/* 
        <header>
          <Logo />
        </header> 
        */}

        {children}

        {/* 
        <Navi
          onClick={handleNaviClick}
          d1Index={navi.d1Index}
          d2Index={navi.d2Index}
        />

        <Footer>
          <Copyright />
          <GoTopBtn
            onClick={handleGoTopBtnClick}
            isVisible={goTopBtn.isVisible}
          />
        </Footer>
         */}
      </Wrap>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  height: 100%;
  overflow: auto;
`;
