import { PhaseType } from '@/shared/enums/env';
import { PhaseConfig } from '@/shared/types/env';
import PHASE_DEV from './dev';
import PHASE_INT from './int';
import PHASE_LIVE from './live';
import PHASE_LOCAL from './local';

const getPhaseConfig = (phase?: string): PhaseConfig => {
  switch (phase) {
    case PhaseType.LOCAL:
      return PHASE_LOCAL;

    case PhaseType.DEV:
      return PHASE_DEV;

    case PhaseType.INT:
      return PHASE_INT;

    case PhaseType.LIVE:
      return PHASE_LIVE;

    default:
      return PHASE_DEV;
  }
};

const PHASE_CONFIG: PhaseConfig = getPhaseConfig(process.env.PHASE);

export default PHASE_CONFIG;
