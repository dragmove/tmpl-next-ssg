import { useCareers } from '@/client/utils/hooks/data';
import { ReactElement } from 'react';
import tw from 'twin.macro';

const Career = (): ReactElement => {
  const {
    data: careers,
    isLoading: isCareersLoading,
    isFetching: isCareersFetching,
    error: careersError,
  } = useCareers({
    // onSuccess, onError, ...
    // enabled: true,
    suspense: true,
  });

  return (
    <Article>
      {careersError && <p>Failed to load Career data.</p>}
      {careers && <p>Succeed to load Career data.</p>}
    </Article>
  );
};

export default Career;

const Article = tw.article`
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
