export const timerHelper = (data) => {
  console.log("hello data timer helper", data);
  const dest = new Date(data).getTime();
  // const test = new Date(Number(action?.payload)).getTime();
  const now = new Date().getTime();
  const diff = dest - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //   console.log("days", days);
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   console.log("hours", hours);
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secounds = Math.floor((diff % (1000 * 60)) / 1000);
  const obj = {
    days,
    hours,
    minutes,
    secounds,
  };
  return obj;
};
