export const ROUTES = {
  HOME: {
    path: '/',
  },
  CHARACTER: {
    path: '/character',
    getRoute: (slug: number | string = '') => ({
      path: `/character/${slug}`,
    }),
  },
  PROFILE: {
    path: '/profile',
  },
  SIGN_IN: {
    path: '/sign-in',
  },
  SIGN_UP: {
    path: '/sign-up',
  },
};
