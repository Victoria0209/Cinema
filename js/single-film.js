const searchParams = new URLSearchParams(location.search);
// const filmId = searchParams.get('id');
const filmId = location.search.split('?id')[1];

const likes = document.getElementById('sf-likes');
const stars = document.querySelectorAll('.rt-star');


const fetchKinopoiskFilmData = async () => {
    const answer = await filmDetailsRequest(filmId);
    const {
        data: filmData
    } = await answer.json();

    const header = document.getElementById('sf-header');
    const description = document.getElementById('sf-desc');
    const posterImage = document.getElementById('sf-poster');
    const premiere = document.getElementById('sf-premiere');

    header.textContent = filmData.nameRu;
    description.textContent = filmData.description;
    posterImage.src = filmData.posterUrl;
    premiere.textContent = filmData.premiereRu;
};

const fethcFilmMeta = async () => {
    const answer = await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}`)
    const {
        body
    } = await answer.json();

    const views = document.getElementById('sf-views');
    const ratingNumber = document.getElementById('sf-rating-number');

    views.textContent = `${body.views} Views`;
    likes.textContent = `${body.likes} Likes`;

    const rating = body.ratings.reduce((a, b) => a + b, 0) / body.ratings.length;
    const intRating = Math.round(rating);
    ratingNumber.textContent = Math.floor(rating * 10) / 10;

    for (let i = 0; i < stars.length; i++) {
        if (i >= intRating) break;
        const star = stars[i];
        star.classList.add('star-selected')
    }
}

const likeIcon = document.getElementById("like-icon");
likeIcon.addEventListener("click", () => {
    if (!likeIcon.classList.contains('like-icon__liked')) {
        const likesCount = parseInt(likes.textContent, 10) + 1;
        likes.innerHTML = `${likesCount} Likes`;
        likeIcon.classList.add('like-icon__liked');

        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }
})

for (const star of stars) {
    star.addEventListener('click', () => {
        fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: +star.dataset.value
            })
        });
    })
}

fetchKinopoiskFilmData();
fethcFilmMeta();