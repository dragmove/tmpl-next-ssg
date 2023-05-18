import { PhaseType } from '@/shared/enums/env';
import { PhaseConfig } from '@/shared/types/env';

const DOMAIN: string =
  'http://tmpl-next-ssg.ap-northeast-2.elasticbeanstalk.com';
const API_DOMAIN: string = `https://dragmove.github.io`;

const PHASE_LIVE: PhaseConfig = {
  NAME: PhaseType.LIVE,
  DOMAIN,
  API_DOMAIN,
};

export default PHASE_LIVE;
