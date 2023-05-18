'use client';

import { logError } from '@/client/utils/error';
import PHASE_CONFIG from '@/shared/env/phase';
import { ErrorFallback } from '@client/components/atoms/async/ErrorFallback';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import toast from 'react-hot-toast';
import tw from 'twin.macro';
import AsyncBoundary from '../../atoms/async/AsyncBoundary';
import Career from './Career';

interface Props {}

const ProfilePage: NextPage<Props> = (props: Props): ReactElement => {
  return (
    <Section>
      <SectionTitle>PROFILE</SectionTitle>

      <PageInfo>
        Profile page
        <br />
        process.env.APP_ENV: {process.env.APP_ENV}
        <br />
        process.env.PHASE: {process.env.PHASE}
        <br />
        PHASE_CONFIG.DOMAIN: {PHASE_CONFIG.DOMAIN}
      </PageInfo>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <AsyncBoundary
            ErrorFallback={ErrorFallback}
            SuspenseFallback={<p>Loading Career data...</p>}
            onError={(err, info) => {
              logError(err, info);

              toast.error(err.message || 'Something went wrong');
            }}
            onReset={() => {
              // Reset the state of your app so the error doesn't happen again
              console.log(
                '::AsyncBoundary.onReset:: by calling resetErrorBoundary',
              );

              reset();
            }}
          >
            <Career />
          </AsyncBoundary>
        )}
      </QueryErrorResetBoundary>
    </Section>
  );
};

export default ProfilePage;

const Section = tw.section`
  relative
`;

const SectionTitle = tw.h2`
  hidden
`;

const PageInfo = tw.p`
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
