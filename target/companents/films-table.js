"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTable = createTable;

var _film = _interopRequireDefault(require("../model/film.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createTable(films, tableBody) {
  tableBody.innerHTML = '';

  for (var index = 0; index < films.length; index++) {
    var film = new _film["default"](films[index]);

    if (film.isNotForAdult()) {
      tableBody.innerHTML += film.renderFilmTableItems();
    }
  }
}
//# sourceMappingURL=films-table.js.map