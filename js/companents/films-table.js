import Film from "../model/film.js";

export function createTable(films, tableBody) {
    tableBody.innerHTML = '';

    for (let index = 0; index < films.length; index++) {
        const film = new Film(films[index]);

        if (film.isNotForAdult()) {
            tableBody.innerHTML += film.renderFilmTableItems();
        }
    }
}