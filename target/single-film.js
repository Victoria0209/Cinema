"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var searchParams = new URLSearchParams(location.search); // const filmId = searchParams.get('id');

var filmId = location.search.split('?id')[1];
var likes = document.getElementById('sf-likes');
var stars = document.querySelectorAll('.rt-star');

var fetchKinopoiskFilmData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var answer, _yield$answer$json, filmData, header, description, posterImage, premiere;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return filmDetailsRequest(filmId);

          case 2:
            answer = _context.sent;
            _context.next = 5;
            return answer.json();

          case 5:
            _yield$answer$json = _context.sent;
            filmData = _yield$answer$json.data;
            header = document.getElementById('sf-header');
            description = document.getElementById('sf-desc');
            posterImage = document.getElementById('sf-poster');
            premiere = document.getElementById('sf-premiere');
            header.textContent = filmData.nameRu;
            description.textContent = filmData.description;
            posterImage.src = filmData.posterUrl;
            premiere.textContent = filmData.premiereRu;

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchKinopoiskFilmData() {
    return _ref.apply(this, arguments);
  };
}();

var fethcFilmMeta = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var answer, _yield$answer$json2, body, views, ratingNumber, rating, intRating, i, star;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(filmId));

          case 2:
            answer = _context2.sent;
            _context2.next = 5;
            return answer.json();

          case 5:
            _yield$answer$json2 = _context2.sent;
            body = _yield$answer$json2.body;
            views = document.getElementById('sf-views');
            ratingNumber = document.getElementById('sf-rating-number');
            views.textContent = "".concat(body.views, " Views");
            likes.textContent = "".concat(body.likes, " Likes");
            rating = body.ratings.reduce(function (a, b) {
              return a + b;
            }, 0) / body.ratings.length;
            intRating = Math.round(rating);
            ratingNumber.textContent = Math.floor(rating * 10) / 10;
            i = 0;

          case 15:
            if (!(i < stars.length)) {
              _context2.next = 23;
              break;
            }

            if (!(i >= intRating)) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("break", 23);

          case 18:
            star = stars[i];
            star.classList.add('star-selected');

          case 20:
            i++;
            _context2.next = 15;
            break;

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fethcFilmMeta() {
    return _ref2.apply(this, arguments);
  };
}();

var likeIcon = document.getElementById("like-icon");
likeIcon.addEventListener("click", function () {
  if (!likeIcon.classList.contains('like-icon__liked')) {
    var likesCount = parseInt(likes.textContent, 10) + 1;
    likes.innerHTML = "".concat(likesCount, " Likes");
    likeIcon.classList.add('like-icon__liked');
    fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(filmId, "/like"), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
});

var _iterator = _createForOfIteratorHelper(stars),
    _step;

try {
  var _loop = function _loop() {
    var star = _step.value;
    star.addEventListener('click', function () {
      fetch("http://inno-ijl.ru/multystub/stc-21-03/film/".concat(filmId, "/rating"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rating: +star.dataset.value
        })
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

fetchKinopoiskFilmData();
fethcFilmMeta();
//# sourceMappingURL=single-film.js.map