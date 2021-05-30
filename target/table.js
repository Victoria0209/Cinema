"use strict";

var films = [{
  title: 'XXX',
  genre: [],
  adult: true
}, {
  title: 'Человек-паук',
  genre: [{
    name: 'Фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'приключения'
  }]
}, {
  title: 'Собачья жизнь 2',
  genre: [{
    name: 'Фэнтэзи'
  }, {
    name: 'драма'
  }, {
    name: 'комедия'
  }]
}, {
  title: 'История игрушек 4',
  genre: [{
    name: 'Мультфильм'
  }, {
    name: 'фэнтэзи'
  }, {
    name: 'комедия'
  }]
}, {
  title: 'Люди в чёрном: Интэрнэшнл',
  genre: [{
    name: 'Фантастика'
  }, {
    name: 'боевик'
  }, {
    name: 'комедия'
  }]
}];
var tableBody = document.getElementById('block04_table_tbody');
tableBody.innerHTML = '';

for (var index = 0; index < films.length; index++) {
  var film = new Film(films[index]);

  if (film.isNotForAdult()) {
    tableBody.innerHTML += film.renderFilmTableItems();
  }
}
//# sourceMappingURL=table.js.map