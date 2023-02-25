import Home from '~/Pages/Home';
import Login from '~/Pages/Login';
import SignUp from '~/Pages/SignUp';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/signup',
        component: SignUp,
    },
];

export { publicRoutes };
