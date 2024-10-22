'use strict';

const generateKey = (length, possible) => {
  const LEN = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    key += possible.charAt(Math.floor(Math.random() * LEN));
  }
  return key;
};

module.exports = { generateKey };
