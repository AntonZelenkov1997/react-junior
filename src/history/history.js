const logHistory = [];

const historyPush = (value) => {
  logHistory.push(value);
  logHistory.length === 10 && logHistory.shift();
};

export { logHistory, historyPush };

// Нужно сделать лог переходов
