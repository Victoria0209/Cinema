"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomToMax = getRandomToMax;
exports.toHour = toHour;
exports.toMinuts = toMinuts;

function getRandomToMax(max) {
  return Math.ceil(Math.random() * (max + 1)) - 1;
}

function toHour(num) {
  return "".concat(num).padStart(2, '0');
}

function toMinuts(num) {
  return String(num).padEnd(2, '0');
}
//# sourceMappingURL=time.js.map