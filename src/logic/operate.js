import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operation === '+') {
    return one.plus(two);
  }

  if (operation === '-') {
    return one.minus(two);
  }

  if (operation === 'X') {
    return one.multiply(two);
  }

  if (operation === '/') {
    if(two === 0){
      return 0;
    } else {
      return one.div(two);
    }
  }

  if (operation === '%') {
    return one.mod(two);
  }
};

export default Operate;
