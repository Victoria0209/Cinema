function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1;
}

function toHour(num) {
    return `${num}`.padStart(2, '0');
}

function toMinuts(num) {
    return String(num).padEnd(2, '0');
}

const kinopoiskapiunofficialRequest = (url) =>
    fetch(url, {
        headers: {
            'accept': 'application/json',
            'X-API-KEY': '4ff0511d-539f-4451-98c7-d1076f9af595',
        },
        cors: 'no-cors'
    })

const topFilmsRequest = () =>
    kinopoiskapiunofficialRequest('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');

const filmDetailsRequest = (id) =>
    kinopoiskapiunofficialRequest(`https://kinopoiskapiunofficial.tech/api/v2.1/films/${id}`);