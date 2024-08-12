// const getRandomNumber = (min = 1, max = 100) => {
//   const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//   return randNumber;
// };
const getRandomInRange = (min = 1, max = 50) => {
  const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randNumber;
};
export default getRandomInRange;
