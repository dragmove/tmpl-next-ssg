import { ReactElement } from 'react';
import { FallbackProps } from 'react-error-boundary';
import tw, { styled } from 'twin.macro';

interface Props extends FallbackProps {}

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: Props): ReactElement => {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.
  return (
    <Wrap role="alert">
      <pre>{error.message || 'Something went wrong'}</pre>
      <ResetButton onClick={() => resetErrorBoundary()}>Try Again</ResetButton>
    </Wrap>
  );
};

const Wrap = tw.div`
  text-sm
  font-base
  [font-size: 0.7rem]
  tracking-widest
  leading-5
  text-white
`;

const ResetButton = styled.button`
  ${tw`
    block
    mt-2
    px-6 py-1.5 
    font-semibold
    font-base
    text-[0.6875rem]
    text-center
    border-0
    rounded
    outline-0
  `}
  background-color: #c23420;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.95);
  }
`;
