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
    return one.mul(two);
  }

  if (operation === '÷') {
    if (two === 0) {
      return 0;
    }
    return one.div(two);
  }

  if (operation === '/') {
    if (two === 0) {
      return 0;
    }
    return one.div(two);
  }

  if (operation === '%') {
    return one.mod(two);
  }

  return 'Error';
};

export default Operate;
