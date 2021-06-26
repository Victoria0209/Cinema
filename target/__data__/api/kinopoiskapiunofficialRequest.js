"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filmDetailsRequest = exports.topFilmsRequest = exports.kinopoiskapiunofficialRequest = void 0;

var _constants = require("../constants.js");

var kinopoiskapiunofficialRequest = function kinopoiskapiunofficialRequest(url) {
  return fetch(url, {
    headers: {
      'accept': 'application/json',
      'X-API-KEY': '4ff0511d-539f-4451-98c7-d1076f9af595'
    },
    cors: 'no-cors'
  });
};

exports.kinopoiskapiunofficialRequest = kinopoiskapiunofficialRequest;

var topFilmsRequest = function topFilmsRequest() {
  return kinopoiskapiunofficialRequest("".concat(_constants.KINOPOISK_UNOFFICIAL_URL, "/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1"));
};

exports.topFilmsRequest = topFilmsRequest;

var filmDetailsRequest = function filmDetailsRequest(id) {
  return kinopoiskapiunofficialRequest("".concat(_constants.KINOPOISK_UNOFFICIAL_URL, "/v2.1/films/").concat(id));
};

exports.filmDetailsRequest = filmDetailsRequest;
//# sourceMappingURL=kinopoiskapiunofficialRequest.js.map