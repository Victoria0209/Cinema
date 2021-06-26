"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _time = require("../utils/time.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

var _getStart = /*#__PURE__*/new WeakSet();

var _getTitle = /*#__PURE__*/new WeakSet();

var _getGenre = /*#__PURE__*/new WeakSet();

var Film = /*#__PURE__*/function () {
  function Film(filmData) {
    _classCallCheck(this, Film);

    _getGenre.add(this);

    _getTitle.add(this);

    _getStart.add(this);

    this.data = filmData;
    this.start = "".concat((0, _time.toHour)((0, _time.getRandomToMax)(13) + 9), ":").concat((0, _time.toMinuts)((0, _time.getRandomToMax)(5)));
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return !this.data.adult;
    }
  }, {
    key: "renderFilmTableItems",
    value: function renderFilmTableItems() {
      return "\n            <tr>\n                <td class=\"table_size_s\">\n                    <svg class=\"svg_green\" viewBox=\"0 0 11 9\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n                            d=\"M4.60581 6.79378L1.46056 3.93033L0.787354 4.66979L4.70255 8.23421L10.8223 0.94099L10.0562 0.298203L4.60581 6.79378Z\" />\n                    </svg>\n                </td>\n\n                <td class=\"table_size_m\">".concat(_classPrivateMethodGet(this, _getStart, _getStart2).call(this), "</td>\n\n                <td class=\"table_size_m\">\n                    <a href=\"https://www.kinopoisk.ru/film/838/\" title=\"\u041A\u0438\u043D\u043E\u043F\u043E\u0438\u0441\u043A\"\n                        target=\"_blank\">").concat(_classPrivateMethodGet(this, _getTitle, _getTitle2).call(this), "</a>\n                </td>\n                <td class=\"table_size_m\">").concat(_classPrivateMethodGet(this, _getGenre, _getGenre2).call(this), "</td>\n            </tr>\n         ");
    }
  }]);

  return Film;
}();

function _getStart2() {
  return this.start;
}

function _getTitle2() {
  return this.data.title;
}

function _getGenre2() {
  return this.data.genre.map(function (g) {
    return g.name;
  }).join(', ');
}

var _default = Film;
exports["default"] = _default;
//# sourceMappingURL=film.js.map