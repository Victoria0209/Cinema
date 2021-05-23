const blockFilmsWrapper = document.getElementById('block-mosaic_wrapper__id');
blockFilmsWrapper.innerHTML = '';

const apiHeaders = {
    'accept': 'application/json',
    'X-API-KEY': '4ff0511d-539f-4451-98c7-d1076f9af595',
}

fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
        headers: {
            ...apiHeaders
        },
        cors: 'no-cors'
    })
    .then(data => data.json())
    .then(data => {data.films.forEach((film) => {
            const id = `blocks-films-desk-${film.filmId}`
            blockFilmsWrapper.innerHTML += `
                <div class="film_pic film_item1">
                    <div class="wrapper_block__img">
                        <img alt="film1" src=${film.posterUrlPreview}>
                    </div>

                    <div class="film_shadow">
                        <div class="films_block">
                            <h2 class="film_name">${film.nameRu}</h2>
                            <div id="${id}" class="film_desc">Loading...</div>
                        </div>
                    </div>
                </div>
            `

            fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/409424`, {
                    headers: {
                        ...apiHeaders
                    },
                    cors: 'no-cors'
                })
                .then(data => data.json())
                .then(({data: {description}}) => {
                    const desc = document.getElementById(id);
                    desc.innerHTML = description;
                    if (!description) {
                        const root = desc.parentNode.parentNode;
                        blockFilmsWrapper.removeChild(root);
                    }
                })
        })
    })