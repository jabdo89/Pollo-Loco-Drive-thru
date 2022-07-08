const getTodayDate = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setUTCHours(0);
  return date;
};

const getYesterdayDate = () => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() - 1);
  date.setUTCHours(0);
  return date;
};

const getLastWeek = () => {
  const date = new Date();
  date.setDate(date.getDate() - date.getDay() - 5);
  date.setUTCHours(0);
  date.setHours(0, 0, 0, 0);
  return date;
};

const getEndLastWeek = () => {
  const date = new Date();
  date.setDate(date.getDate() - date.getDay());
  date.setHours(0, 0, 0, 0);
  return date;
};

const getThisMonth = () => {
  const date = new Date();
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  date.setUTCHours(0);
  return date;
};

const getThisWeek = () => {
  const date = new Date();
  date.setDate(date.getDate() - date.getDay() + 1);
  date.setHours(0, 0, 0, 0);
  date.setUTCHours(0);
  return date;
};

const getLastMonth = () => {
  const date = new Date();
  date.setDate(2);
  date.setMonth(date.getMonth() - 1);
  date.setUTCHours(0);
  date.setHours(0, 0, 0, 0);
  return date;
};

const getEndLastMonth = () => {
  const date = new Date();
  date.setDate(1);
  date.setDate(date.getDate() - 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

const msToTime = (ms) => {
  let seconds = (ms / 1000).toFixed(1);
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
  if (seconds < 60) return { tiempo: seconds, tipo: "segundos" };
  else if (minutes < 60) return { tiempo: minutes, tipo: "minutos" };
  else if (hours < 24)
    return { tiempo: hours, tipo: hours == 1 ? "hora" : "horas" };
  else return { tiempo: days, tipo: days == 1 ? "día" : "días" };
};

export {
  getTodayDate,
  getYesterdayDate,
  getLastMonth,
  getEndLastMonth,
  getLastWeek,
  getEndLastWeek,
  msToTime,
  getThisMonth,
  getThisWeek,
};
