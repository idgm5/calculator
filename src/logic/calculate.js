import Operate from './operate';

const Calculate = ({total,next,operation}, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  if (buttonName === '+/-'){
    if(next){
      return {
        total,
        next: (parseFloat(next) * -1).toString(),
        operation,
      }
    }
    if(total && !next){
      return {
        total: (parseFloat(total) * -1).toString(),
        next,
        operation,
      }
    }
    return {
      total,
      next,
      operation,
    }
  }
  if (buttonName === '%') {
    if(operation && next){
      return {
        total: operate(parseFloat(total), 100, '%').toString(),
        next,
        operation,
      }
    }

    if(next){
      return {
        total,
        next: operate(parseFloat(next), 100, '%').toString(),
        operation,
      }
    }

    return {
      total,
      next,
      operation,
    }
  }

  if (buttonName === '÷') {
    if(operation && next){
      return {
        total: operate(parseFloat(total), 100, '/').toString(),
        next,
        operation,
      }
    }

    if(next){
      return {
        total,
        next: operate(parseFloat(next), 100, '/').toString(),
        operation,
      }
    }

    return {
      total,
      next,
      operation,
    }
  }

  if(typeof buttonName === 'number'){
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    }
  }

  if(buttonName === '='){
    if(next && total){
      return {
        total: operate(parseFloat(total), parseFloat(next), operation).toString(),
        next,
        operation.
      }
    }

    return {
      total,
      next,
      operation,
    }
  }

};

export default Calculate;
