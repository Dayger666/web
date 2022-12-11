import Loadable from 'react-loadable';
import { FC } from 'react';

import Loading from 'components/Loader';
import { ROUTES } from 'utils/routes';

const loadable = (loader: any) => Loadable({
  loader,
  loading: Loading as FC,
});

export const privateRoutesMap = [
];

export const publicRoutes = [
  {
    path: ROUTES.HOME.path,
    Element: loadable(() => import('containers/Homepage')),
  },
  {
    path: `${ROUTES.CHARACTER.path}/:id`,
    Element: loadable(() => import('containers/Character')),
  },
];
