import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomGlobalStyles = createGlobalStyle`
  :root {
    ${tw`antialiased`}

    --color-white: 255 255 255;
    --color-black: 0 0 0;

    --font-base: 'Gothic A1', 'Nanum Gothic', dotum, verdana, Arial, applegothic, sans-serif;
  }

  body {
    background-color: #1c1c1c;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomGlobalStyles />
  </>
);

export default GlobalStyles;

/*
// TODO: remove comments
// import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    body {
        line-height: 1;
        background-color: #1c1c1c;
    }

    ol, ul {
        list-style: none;
    }

    input::selection { background: #1db954; color: #fff; }
    input::-moz-selection { background:#1db954; color:#fff; }
    input::-webkit-selection { background:#1db954; color:#fff; }

    ::selection { background:#fbdfb7; color:#fff; }
    ::-moz-selection { background:#fbdfb7; color:#fff; }
    ::-webkit-selection { background:#fbdfb7; color:#fff; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #1c1c1c; }
    ::-webkit-scrollbar-thumb { background: #555; }
    ::-webkit-scrollbar-thumb:hover { background: #fff; }

    #__next {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
`;

export default GlobalStyle;
*/
