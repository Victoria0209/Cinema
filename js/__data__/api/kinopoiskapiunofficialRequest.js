import {KINOPOISK_UNOFFICIAL_URL} from '../constants.js'

export const kinopoiskapiunofficialRequest = (url) =>
fetch(url, {
    headers: {
        'accept': 'application/json',
        'X-API-KEY': '4ff0511d-539f-4451-98c7-d1076f9af595',
    },
    cors: 'no-cors'
})

export const topFilmsRequest = () =>
kinopoiskapiunofficialRequest(`${KINOPOISK_UNOFFICIAL_URL}/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1`);

export const filmDetailsRequest = (id) =>
kinopoiskapiunofficialRequest(`${KINOPOISK_UNOFFICIAL_URL}/v2.1/films/${id}`);