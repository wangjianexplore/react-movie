import Movie from '../components/movie';
import Cinema from '../components/cinema';

let routes = [
    {
        path: '/',
        component: Movie,
        exact: true
    },
    {
        path: '/cinema',
        component: Cinema
    }
]

export default routes;