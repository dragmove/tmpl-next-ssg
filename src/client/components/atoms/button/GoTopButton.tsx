import { BREAK_POINTS } from '@client/constants/config';
import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

interface GoTopButtonProps {
  title?: string;
  isVisible: boolean;
  onClick?: (evt: SyntheticEvent) => void;
}

export const GoTopButton: FC<GoTopButtonProps> = ({
  title = 'Go Top',
  isVisible = false,
  onClick,
}) => (
  <Wrap isVisible={isVisible}>
    <Button onClick={onClick}>{title}</Button>
  </Wrap>
);

// TODO: separate isVisible prop, position, media-query from Wrap
const Wrap = styled.div<GoTopButtonProps>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')}
  position: absolute;
  right: 33px;
  bottom: 43px;

  @media only screen and (min-width: ${BREAK_POINTS.DESKTOP}px) {
    display: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 11px;
  font-family: 'Carme', 'Lato', Roboto, Ubuntu, san-serif;
  color: #fff;
  letter-spacing: 0.05em;
  opacity: 0.75;
  cursor: pointer;

  &:hover {
    color: #c23420;
    text-decoration: underline;
    opacity: 1;
  }
  &:active {
    color: #c23420;
    text-decoration: line-through;
    opacity: 1;
  }
  &:focus {
    outline: 0;
  }
`;
