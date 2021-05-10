const films = [{
    start: '01:00',
    title: 'XXX',
    genre: [],
    adult: true,

}, {

    start: '10:00',
    title: 'Человек-паук',
    genre: [{
        name: 'Фантастика'

    }, {
        name: 'боевик'

    }, {
        name: 'приключения'

    }],

}, {
    start: '12:00',
    title: 'Собачья жизнь 2',
    genre: [{
        name: 'Фэнтэзи'

    }, {
        name: 'драма'

    }, {
        name: 'комедия'

    }],

}, {
    start: '14:00',
    title: 'История игрушек 4',
    genre: [{
        name: 'Мультфильм'

    }, {
        name: 'фэнтэзи'

    }, {
        name: 'комедия'

    }],
}, {
    start: '16:00',
    title: 'Люди в чёрном: Интэрнэшнл',
    genre: [{
        name: 'Фантастика'

    }, {
        name: 'боевик'

    }, {
        name: 'комедия'

    }],
}, ];
const filmHelper = {
    getTitle() {
        return this.title;
    },
    getStart() {
        return this.start;
    },
    getGenre() {
        return this.genre
        .map(g => g.name) 
        .join(', ');
    },
}

function renderFilmTableItems(film) {
    return `
    <tr>
        <td class="table_size_s">
            <svg class="svg_green" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z" />
            </svg>
        </td>

        <td class="table_size_m">${filmHelper.getStart.apply(film)}</td>

        <td class="table_size_m">
            <a href="https://www.kinopoisk.ru/film/838/" title="Кинопоиск"
                target="_blank">${filmHelper.getTitle.apply(film)}</a>
        </td>
        <td class="table_size_m">${filmHelper.getGenre.apply(film)}</td>
    </tr>
`
}

const tableBody = document.getElementById('block04_table_tbody');
tableBody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    if (!films[index].adult) {
        tableBody.innerHTML += renderFilmTableItems(films[index]);
    }
}