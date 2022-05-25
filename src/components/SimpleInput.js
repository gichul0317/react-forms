import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    input: enteredInput,
    isValid: enteredInputIsValid,
    hasError: inputHasError,
    inputHandling: inputHandler,
    inputBlurHandling: inputBlurHandler,
    reset: resetInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputHandling: emailHandler,
    inputBlurHandling: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredInputIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitHandling = (e) => {
    e.preventDefault();

    if (!enteredInputIsValid) {
      return;
    }
    console.log(enteredInput, enteredEmail);
    resetInput();
    resetEmailInput();
  };

  const InputClasses = inputHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandling}>
      <div className={InputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandler}
          value={enteredInput}
          onBlur={inputBlurHandler}
        />
        {inputHasError && <p className="error-text">name must not be empty.</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && (
          <p className="error-text">email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
