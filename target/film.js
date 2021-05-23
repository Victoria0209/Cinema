"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    this.data = filmData;
    this.start = "".concat(toHour(getRandomToMax(14) + 9), ":").concat(toMinuts(getRandomToMax(5)));
  }

  _createClass(Film, [{
    key: "getStart",
    value: function getStart() {
      return this.start;
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this.data.title;
    }
  }, {
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "getGenre",
    value: function getGenre() {
      return this.data.genre.map(function (g) {
        return g.name;
      }).join(', ');
    }
  }, {
    key: "renderFilmTableItems",
    value: function renderFilmTableItems() {
      return "\n            <tr>\n                <td class=\"table_size_s\">\n                    <svg class=\"svg_green\" viewBox=\"0 0 11 9\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z\" />\n                    </svg>\n                </td>\n\n                <td class=\"table_size_m\">".concat(this.getStart(), "</td>\n\n                <td class=\"table_size_m\">\n                    <a href=\"https://www.kinopoisk.ru/film/838/\" title=\"\u041A\u0438\u043D\u043E\u043F\u043E\u0438\u0441\u043A\"\n                        target=\"_blank\">").concat(this.getTitle(), "</a>\n                </td>\n                <td class=\"table_size_m\">").concat(this.getGenre(), "</td>\n            </tr>\n            ");
    }
  }]);

  return Film;
}();