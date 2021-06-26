 import { getRandomToMax, toHour, toMinuts } from "../utils/time.js"
 
 class Film {
    constructor(filmData) {
        this.data = filmData;
        this.start = `${toHour(getRandomToMax(13) + 9)}:${toMinuts(getRandomToMax(5))}`;
    }

    #getStart() {
        return this.start;
    }

    #getTitle() {
        return this.data.title;
    }

    isNotForAdult() {
        return !this.data.adult;
    }

    #getGenre() {
        return this.data.genre
            .map(g => g.name)
            .join(', ');
    }
    renderFilmTableItems() {
        return `
            <tr>
                <td class="table_size_s">
                    <svg class="svg_green" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z" />
                    </svg>
                </td>

                <td class="table_size_m">${this.#getStart()}</td>

                <td class="table_size_m">
                    <a href="https://www.kinopoisk.ru/film/838/" title="Кинопоиск"
                        target="_blank">${this.#getTitle()}</a>
                </td>
                <td class="table_size_m">${this.#getGenre()}</td>
            </tr>
         `
    }
}
export default Film;