var addDays = require("date-fns/addDays");

const addeddates = (days) => {
  const result = addDays(new Date(2020, 7, 22), days);
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
};

module.exports = addeddates;
