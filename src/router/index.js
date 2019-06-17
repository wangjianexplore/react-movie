import Movie from '../components/movie';
import Cinema from '../components/cinema';
import MovieCinema from '../components/movieCinema';

let routes = [
    {
        path: '/',
        component: Movie,
        exact: true
    },
    {
        path: '/cinema',
        component: Cinema
    },
    {
        path: '/movieCinema',
        component: MovieCinema
    }
]

export default routes;