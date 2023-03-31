import React from 'react';
import tw from 'twin.macro';

const Motto = () => (
  <Wrap>
    조금 느리게
    <br />
    견고하게
    <br />
    닮지 않게
  </Wrap>
);

export default Motto;

const Wrap = tw.p`
  mt-8
  w-full
  text-sm
  font-base
  [font-size: 0.7rem]
  tracking-widest
  text-center
  leading-5
  text-white
`;
