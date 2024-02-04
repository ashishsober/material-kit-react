import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'My Trips',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'students',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'teachers',
    path: '/products',
    icon: icon('ic_user'),
  },
  {
    title: 'class arrangments',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'fees submission',
    path: '/feesSubmission',
    icon: icon('ic_blog'),
  },
  {
    title: 'role management',
    path: '/permissionMgmt',
    icon: icon('ic_blog'),
  },
  {
    title: 'login history',
    path: '/loginHistory',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  }
];

export default navConfig;
