const btnDecrement = document.querySelector('button[data-action="decrement"]');
const startValue = document.querySelector("#value");
const btnIncrement = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
const increaseByOne = () => {
  counterValue -= 1;
  return (startValue.textContent = counterValue);
};
const reduceByOne = () => {
  counterValue += 1;
  return (startValue.textContent = counterValue);
};
btnDecrement.addEventListener("click", increaseByOne);
btnIncrement.addEventListener("click", reduceByOne);
