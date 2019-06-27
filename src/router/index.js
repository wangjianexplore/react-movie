import Movie from '../components/movie';
import Cinema from '../components/cinema';
import MovieCinema from '../components/movieCinema';
import CinemaDetail from '../components/cinemaDetail';
import MovieDetail from '../components/movieDetail';
import PayOrder from '../components/payOrder';
import My from '../components/my';

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
    },
    {
        path: '/movieDetail',
        component: MovieDetail
    },
    {
        path: '/payOrder',
        component: PayOrder
    },
    {
        path: '/my',
        component: My
    }
]

export default routes;