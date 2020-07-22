import Operate from './operate';

const Calculate = ({
  total,
  next,
  operation,
}, buttonName) => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '÷') {
    if (!total && next) {
      return {
        total: next,
        next: null,
        operation: buttonName,
      };
    }
    if (total && !next) {
      return {
        total,
        next,
        operation: buttonName,
      };
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === '+/-') {
    if (next) {
      return {
        total,
        next: (parseFloat(next) * -1).toString(),
        operation,
      };
    }
    if (total && !next) {
      return {
        total: (parseFloat(total) * -1).toString(),
        next,
        operation,
      };
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === '%') {
    if (operation && next) {
      return {
        total,
        next: Operate(parseFloat(total), parseFloat(next), '%').toString(),
        operation,
      };
    }

    if (next) {
      return {
        total: Operate(parseFloat(next), 100, '/').toString(),
        next,
        operation,
      };
    }
    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName.match(/[0-9]/)) {
    return {
      total,
      next: next ? `${next}${buttonName}` : `${buttonName}`,
      operation,
    };
  }

  if (buttonName === '=') {
    if (next === '0' && operation === '÷'){
      return {
        total: '0',
        next,
        operation,
      };
    }
    if (next && operation) {
      return {
        total: Operate(parseFloat(total), parseFloat(next), operation).toString(),
        next,
        operation,
      };
    }

    return {
      total,
      next,
      operation,
    };
  }

  if (buttonName === '.') {
    if (next) {
      return {
        total,
        next: `${next}.`,
        operation,
      };
    }
    return {
      total,
      next: '0.',
      operation,
    };
  }

  if (buttonName.match(/[-/+X]/)) {
    if (!total && next) {
      return {
        total: next,
        next: null,
        operation: buttonName,
      };
    }
    if (total && !next) {
      return {
        total,
        next,
        operation: buttonName,
      };
    }

    return {
      total,
      next,
      operation,
    };
  }


  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
