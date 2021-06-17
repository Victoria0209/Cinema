const blockFilmsWrapper = document.getElementById('block-mosaic_wrapper__id');

function renderFilmBlock(posterUrl, filmName, id) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('film_pic', 'film_item1');
    const link = document.createElement('a');
    link.href = `/single/?id=${id}`;
    const wrapperImg = document.createElement('div');
    wrapperImg.classList.add('wrapper_block__img');
    const imgTag = document.createElement('img');
    imgTag.src = posterUrl;
    const divShadow = document.createElement('div');
    divShadow.classList.add('film_shadow');
    const divFilmBlock = document.createElement('div');
    divFilmBlock.classList.add('films_block');
    const header2 = document.createElement('h2');
    header2.classList.add('film_name');
    header2.textContent = filmName;
    const divDesc = document.createElement('div');
    divDesc.classList.add('film_desc');

    wrapper.append(link);
    link.append(wrapperImg, divShadow);
    wrapperImg.append(imgTag);
    divShadow.append(divFilmBlock);
    divFilmBlock.append(header2, divDesc);

    return [wrapper, divDesc];
};
// создаем DOM элементы

const fetchBlockFilms = async () => {
    const result = await topFilmsRequest();
    const data = await result.json();

    const requests = [];
    const filmBlocksMap = new Map();

    data.films.forEach((film) => {
        const [filmLayout, divDesc] = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId)
        // отвечает за отрисовку блоков
        requests.push(new Promise(async (resolve, reject) => {
            const detailResult = await filmDetailsRequest(film.filmId);
            const detailData = await detailResult.json();
            const description = detailData.data.description;
            if (description) {
                filmBlocksMap.set(film.filmId, filmLayout)
                divDesc.textContent = description;
            }
            resolve();
        }));
    })
    // отвечает за отображение desc и отрисовку блоков
    await Promise.all(requests);
    // тз 20- отображение готовых блоков
    blockFilmsWrapper.innerHTML = "";
    // стирание скелета
    const elements = [...filmBlocksMap.values()].slice(0, 9)
    // обрезка блоков
    blockFilmsWrapper.append(...elements)
    // добавление готовых блоков в разметку
}
fetchBlockFilms();