import React from 'react';
import styled from 'styled-components';

const Motto = () => {
  return (
    <Wrap className="Motto">
      조금 느리게
      <br />
      견고하게
      <br />
      닮지 않게
      <br />
      process.env.NEXT_PUBLIC_GREETING: {process.env.NEXT_PUBLIC_GREETING}
    </Wrap>
  );
};

export default Motto;

const Wrap = styled.p`
  margin-top: 32px;
  width: 100%;
  font-size: 0.7em;
  font-weight: normal;
  font-family: 'Gothic A1', 'Nanum Gothic', dotum, verdana, Arial, applegothic,
    sans-serif;
  letter-spacing: 0.1em;
  text-align: center;
  line-height: 22px;
  color: #fff;
`;
