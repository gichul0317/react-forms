import { useState } from 'react';

function useInput(validateValue) {
  const [enteredInput, setEnteredInput] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateValue(enteredInput);
  const hasError = !inputIsValid && isTouched;

  const inputHandling = (e) => {
    setEnteredInput(e.target.value);
    console.log(e.target.value);
  };

  const inputBlurHandling = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredInput('');
    setIsTouched(false);
  };

  return {
    input: enteredInput,
    isValid: inputIsValid,
    hasError: hasError,
    inputHandling,
    inputBlurHandling,
    reset,
  };
}

export default useInput;
