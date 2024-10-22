'use strict';
//ESLint цю програму не перевірив
// бо на кожну відмінну від оригінальної пише, що або замала довжина
// або завелика
const ipToInt = (ip = '127.0.0.1') => {
  const IP = ip.split('.').map((x) => parseInt(x));
  const ToValue = (res, item) =>  (res << 8) + item;
  return IP.reduce(ToValue, 0);
};

module.exports = { ipToInt };
