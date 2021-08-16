export const getDate = (region) => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat(`${region}`, options).format(now);
};
