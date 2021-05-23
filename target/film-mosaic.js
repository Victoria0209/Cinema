"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blockFilmsWrapper = document.getElementById('block-mosaic_wrapper__id');
blockFilmsWrapper.innerHTML = '';
var apiHeaders = {
  'accept': 'application/json',
  'X-API-KEY': '4ff0511d-539f-4451-98c7-d1076f9af595'
};
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
  headers: _objectSpread({}, apiHeaders),
  cors: 'no-cors'
}).then(function (data) {
  return data.json();
}).then(function (data) {
  data.films.forEach(function (film) {
    var id = "blocks-films-desk-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n                <div class=\"film_pic film_item1\">\n                    <div class=\"wrapper_block__img\">\n                        <img alt=\"film1\" src=".concat(film.posterUrlPreview, ">\n                    </div>\n\n                    <div class=\"film_shadow\">\n                        <div class=\"films_block\">\n                            <h2 class=\"film_name\">").concat(film.nameRu, "</h2>\n                            <div id=\"").concat(id, "\" class=\"film_desc\">Loading...</div>\n                        </div>\n                    </div>\n                </div>\n            ");
    fetch("https://kinopoiskapiunofficial.tech/api/v2.1/films/409424", {
      headers: _objectSpread({}, apiHeaders),
      cors: 'no-cors'
    }).then(function (data) {
      return data.json();
    }).then(function (_ref) {
      var description = _ref.data.description;
      var desc = document.getElementById(id);
      desc.innerHTML = description;

      if (!description) {
        var root = desc.parentNode.parentNode;
        blockFilmsWrapper.removeChild(root);
      }
    });
  });
});