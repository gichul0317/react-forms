import { useState } from 'react';

function useInput(validateValue) {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredInput);
  const hasError = !inputIsValid && isTouched;

  const inputHandling = (e) => {
    setEnteredInput(e.target.value);
  };

  const inputBlurHandling = (e) => {
    setIsTouched(true);
  };

  return {
    input: enteredInput,
    hasError: hasError,
    inputHandling,
    inputBlurHandling,
  };
}

export default useInput;
