import { DOMAIN_PORT } from '@/shared/constants/config';
import { PhaseType } from '@/shared/enums/env';
import { PhaseConfig } from '@/shared/types/env';

const DOMAIN: string = `http://localhost:${DOMAIN_PORT}`;
const API_DOMAIN: string = `https://dragmove.github.io`;

const PHASE_LOCAL: PhaseConfig = {
  NAME: PhaseType.LOCAL,
  DOMAIN,
  API_DOMAIN,
};

export default PHASE_LOCAL;
