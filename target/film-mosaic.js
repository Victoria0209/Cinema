"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var blockFilmsWrapper = document.getElementById('block-mosaic_wrapper__id');

function renderFilmBlock(posterUrl, filmName, id) {
  var wrapper = document.createElement('div');
  wrapper.classList.add('film_pic', 'film_item1');
  var link = document.createElement('a');
  link.href = "/single/?id=".concat(id);
  var wrapperImg = document.createElement('div');
  wrapperImg.classList.add('wrapper_block__img');
  var imgTag = document.createElement('img');
  imgTag.src = posterUrl;
  var divShadow = document.createElement('div');
  divShadow.classList.add('film_shadow');
  var divFilmBlock = document.createElement('div');
  divFilmBlock.classList.add('films_block');
  var header2 = document.createElement('h2');
  header2.classList.add('film_name');
  header2.textContent = filmName;
  var divDesc = document.createElement('div');
  divDesc.classList.add('film_desc');
  wrapper.append(link);
  link.append(wrapperImg, divShadow);
  wrapperImg.append(imgTag);
  divShadow.append(divFilmBlock);
  divFilmBlock.append(header2, divDesc);
  return [wrapper, divDesc];
}

; // создаем DOM элементы

var fetchBlockFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result, data, requests, filmBlocksMap, elements;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return topFilmsRequest();

          case 2:
            result = _context2.sent;
            _context2.next = 5;
            return result.json();

          case 5:
            data = _context2.sent;
            requests = [];
            filmBlocksMap = new Map();
            data.films.forEach(function (film) {
              var _renderFilmBlock = renderFilmBlock(film.posterUrlPreview, film.nameRu, film.filmId),
                  _renderFilmBlock2 = _slicedToArray(_renderFilmBlock, 2),
                  filmLayout = _renderFilmBlock2[0],
                  divDesc = _renderFilmBlock2[1]; // отвечает за отрисовку блоков


              requests.push(new Promise( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                  var detailResult, detailData, description;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return filmDetailsRequest(film.filmId);

                        case 2:
                          detailResult = _context.sent;
                          _context.next = 5;
                          return detailResult.json();

                        case 5:
                          detailData = _context.sent;
                          description = detailData.data.description;

                          if (description) {
                            filmBlocksMap.set(film.filmId, filmLayout);
                            divDesc.textContent = description;
                          }

                          resolve();

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            }); // отвечает за отображение desc и отрисовку блоков

            _context2.next = 11;
            return Promise.all(requests);

          case 11:
            // тз 20- отображение готовых блоков
            blockFilmsWrapper.innerHTML = ""; // стирание скелета

            elements = _toConsumableArray(filmBlocksMap.values()).slice(0, 9); // обрезка блоков

            blockFilmsWrapper.append.apply(blockFilmsWrapper, _toConsumableArray(elements)); // добавление готовых блоков в разметку

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchBlockFilms() {
    return _ref.apply(this, arguments);
  };
}();

fetchBlockFilms();
//# sourceMappingURL=film-mosaic.js.map