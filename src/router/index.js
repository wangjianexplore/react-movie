import Movie from '../components/movie';
import Cinema from '../components/cinema';
import MovieCinema from '../components/movieCinema';
import CinemaDetail from '../components/cinemaDetail';

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
    },
    {
        path: '/cinemaDetail',
        component: CinemaDetail
    }
]

export default routes;