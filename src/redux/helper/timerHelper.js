export const timerHelper = (data) => {
  const dest = new Date(data).getTime();
  // const test = new Date(Number(action?.payload)).getTime();
  const now = new Date().getTime();
  const diff = dest - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //   console.log("days", days);
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   console.log("hours", hours);
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secounds = Math.floor((diff % (1000 * 60)) / 1000);

  const obj = {
    days,
    hours,
    minutes,
    secounds,
  };
  return obj;
};
