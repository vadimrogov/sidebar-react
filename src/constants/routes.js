import StartPage from '../pages/StartPage';

const ROUTES = [
  {
    name: 'Start',
    path: '/',
    exact: true,
    componentRenderer: StartPage,
  },
  {
    name: 'Your Cart',
    path: '/cart',
    componentRenderer: StartPage,
  },
  {
    name: 'Favorites',
    path: '/favorites',
    componentRenderer: StartPage,
  },
  {
    name: 'Your Orders',
    path: '/orders',
    componentRenderer: StartPage,
  },
  {
    name: 'Sign Out',
    path: '/signout',
    componentRenderer: StartPage,
    renderBottom: true,
  },
];

export default ROUTES;
