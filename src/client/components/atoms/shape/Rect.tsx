import { isDefined } from '@shared/utils/common';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface RectProps {
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
  skewX?: number;
  skewY?: number;
  opacity?: number;
  backgroundColor?: string;
  radius?: number;
  boxShadow?: string;
}

const defaultProps: RectProps = {
  position: 'relative',
  width: 100,
  height: 100,
  x: 0,
  y: 0,
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0,
  skewX: 0,
  skewY: 0,
  opacity: 1,
  backgroundColor: '#000',
  radius: 0,
  boxShadow: 'none',
};

export const Rect = (props: RectProps): ReactElement => {
  const _props = { ...defaultProps, ...props };

  return <Wrap {..._props} />;
};

const Wrap = styled.div.attrs(
  ({
    position,
    top,
    right,
    bottom,
    left,
    width,
    height,
    backgroundColor,
    opacity,
    x,
    y,
    rotateX,
    rotateY,
    rotateZ,
    skewX,
    skewY,
    radius,
    boxShadow,
  }: RectProps) => ({
    style: {
      position: position,
      top: isDefined(top) ? `${top}px` : 'auto',
      right: isDefined(right) ? `${right}px` : 'auto',
      bottom: isDefined(bottom) ? `${bottom}px` : 'auto',
      left: isDefined(left) ? `${left}px` : 'auto',
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: backgroundColor,
      opacity: opacity,
      transform: `translateX(${x}px) translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) skewX(${skewX}deg) skewY(${skewY}deg)`,
      borderRadius: `${radius}%`,
      boxShadow: boxShadow,
    },
  }),
)`
  perspective: 2000px;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
`;
