'use strict';

const random = (min, max) => {
  if (!max) {
    max = min;
    min = 0;
  }
  const range = max - min + 1;
  return min + Math.floor(Math.random() * range);
};

module.exports = { random };
