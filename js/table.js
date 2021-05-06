const films = [{
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
const tableBody = document.getElementById('block04_table_tbody');
tableBody.innerHTML = '';

for (let index = 0; index < films.length; index++) {
    tableBody.innerHTML += `
        <tr>
            <td class="table_size_s">
                <svg class="svg_green" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z" />
                </svg>
            </td>

            <td class="table_size_m">${films[index].start}</td>

            <td class="table_size_m">
                <a href="https://www.kinopoisk.ru/film/838/" title="Кинопоиск"
                    target="_blank">${films[index].title}</a>
            </td>
            <td class="table_size_m">${films[index].genre.map(g => g.name)}</td>
        </tr>
    `;
}