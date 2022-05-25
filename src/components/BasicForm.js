import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    input: nameInput,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputHandling: nameHandler,
    inputBlurHandling: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    input: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputHandling: lastNameHandler,
    inputBlurHandling: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    input: emailInput,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputHandling: emailHandler,
    inputBlurHandling: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes('@'));

  const submitHandling = (e) => {
    e.preventDefault();

    nameReset();
    lastNameReset();
    emailReset();
  };

  let formValidation = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formValidation = true;
  }

  const firstNameClass = nameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClass = lastNameHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandling}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameHandler}
            onBlur={nameBlurHandler}
            value={nameInput}
          />
          {nameHasError ? (
            <p className="error-text">enter first name...</p>
          ) : null}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameInput}
          />
          {lastNameHasError ? (
            <p className="error-text">enter last name...</p>
          ) : null}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={emailInput}
        />
        {emailHasError ? <p className="error-text">enter email...</p> : null}
      </div>
      <div className="form-actions">
        <button disabled={!formValidation}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
