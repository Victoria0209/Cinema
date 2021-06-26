import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
import '../libs/own/owl.carousel.min.js';
import '../node_modules/@babel/polyfill/dist/polyfill.min.js';
import '../libs/fancybox/jquery.fancybox.min.js';

import "./single.js";
import "./city.js";
import { topFilmsRequest, filmDetailsRequest } from './__data__/api/kinopoiskapiunofficialRequest.js';

const searchParams = new URLSearchParams(location.search);
const filmId = searchParams.get('id');

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

    const rating = body.ratings.reduce((a, b) => parseInt(a) + parseInt(b), 0) / body.ratings.length;
    const intRating = Math.round(rating);

    if (isNaN(intRating)) {
        ratingNumber.textContent = "0.0"
    } else {
        ratingNumber.textContent = rating.toFixed(1);
    }

    stars.forEach((star, i) => {
        if (i < intRating) {
            star.classList.add('star-selected')
        };
    })
}

const likeIcon = document.getElementById("like-icon");
const FILM_KEY = `film-${filmId}`;
const liked = localStorage.getItem(FILM_KEY);
if (liked !== null) {
    likeIcon.classList.add('like-icon__liked');
}
likeIcon.addEventListener("click", () => {
    if (!likeIcon.classList.contains('like-icon__liked')) {
        localStorage.setItem(FILM_KEY, true)
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

$('.rating_stars').on('click', '.rt-star', async function () {
    await fetch(`http://inno-ijl.ru/multystub/stc-21-03/film/${filmId}/rating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            rating: +this.dataset.value
        })
    });
    fethcFilmMeta();
})

fetchKinopoiskFilmData();
fethcFilmMeta();