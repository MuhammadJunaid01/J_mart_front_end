export const timerHelper = (data, status) => {
  const { _id } = data[0]?.data;
  const dest = new Date(data[0]?.data?.expireDate).getTime();
  const res = new Date("Jul 22 2022 03:44:00").getTime();
  const now = new Date().getTime();
  const diff = dest - now;
  const timeOutOfferData = [];
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let secounds = Math.floor((diff % (1000 * 60)) / 1000);
  if (days <= 0 || hours <= 0 || (minutes <= 0 && secounds <= 0)) {
    timeOutOfferData.push(data[0].arr[data[0].count]);
  }
  const obj = {
    days,
    hours,
    minutes,
    secounds,
    expire: timeOutOfferData,
  };
  return obj;
};
