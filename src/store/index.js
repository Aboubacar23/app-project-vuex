import { createStore } from 'vuex'
import { SET_NOTE } from '../store/mutations-types';

// Create a new store instance.
const store = createStore({
    state: {
        currentMovie: {},
        movies: [{
                id: 1,
                title: "Tomb raider",
                image: require('@/assets/movies/raid.jpeg'),
                note: 4,
            },
            {
                id: 2,
                title: "Raid 2",
                image: require('@/assets/movies/raid2.jpeg'),
                note: 3,
            },
            {
                id: 3,
                title: "The cure",
                image: require('@/assets/movies/the_cure.jpeg'),
                note: 5,
            },
            {
                id: 4,
                title: "Spiderman",
                image: require('@/assets/movies/spiderman.jpg'),
                note: 4,
            }
        ]
    },

    getters: {
        getMovies(state) {
            return state.movies;
        },
        getCurrentMovie(state) {
            return state.currentMovie;
        }
    },
    mutations: {
        setCurrentMovie(state, movie) {
            state.currentMovie = movie;
        },
        setCurrentMovieVersionMutation(state, movieId) {
            let movieFound = {};
            state.movies.forEach((movie) => {
                if (movieId == movie.id) {
                    movieFound = movie;
                }
            });
            state.currentMovie = movieFound;
        },
        [SET_NOTE](state, note) {
            state.currentMovie.note = note;
        }
    },
    actions: {
        setCurrentMovie({ commit, state }, movieId) {
            let movieFound = {};
            state.movies.forEach((movie) => {
                if (movieId == movie.id) {
                    movieFound = movie;
                }
            })
            commit('setCurrentMovie', movieFound);
        }
    }
})

export default store;