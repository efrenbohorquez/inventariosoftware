import { useMemo } from 'react';
import type { Application, Stats } from '@types/index';

export const useApplicationStats = (applications: Application[]): Stats => {
  return useMemo(() => ({
    total: applications.length,
    legacy: applications.filter(a => a.status === 'Legacy').length,
    modern: applications.filter(a => a.status === 'Moderno').length,
  }), [applications]);
};
