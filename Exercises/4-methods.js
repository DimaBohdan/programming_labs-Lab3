'use strict';

const methods = (iface) => {
  const methods = [];
  for (const method in iface) {
    if (typeof iface[method] === 'function') {
      methods.push([method, iface[method].length]);
    }
  }
  return methods;
};

module.exports = { methods };
