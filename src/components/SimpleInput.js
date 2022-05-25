import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);

  const [email, setEmail] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const enteredNameValid = name.trim() !== '';
  const isInvalid = !enteredNameValid && touched;

  const enteredEmailValid = email.includes('@');
  const emailInvalid = !enteredEmailValid && emailTouched;

  let formIsValid = false;

  if (enteredNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const inputHandling = (e) => {
    setName(e.target.value);
  };

  const emailHandling = (e) => {
    setEmail(e.target.value);
  };

  const inputBlurHandling = (e) => {
    setTouched(true);
  };

  const emailBlurHandling = (e) => {
    setEmailTouched(true);
  };

  const submitHandling = (e) => {
    e.preventDefault();

    setTouched(true);

    if (!enteredNameValid) {
      return;
    }
    console.log(name);
    setName('');
    setEmail('');
    setTouched(false);
    setEmailTouched(false);
  };

  const InputClasses = isInvalid ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandling}>
      <div className={InputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandling}
          value={name}
          onBlur={inputBlurHandling}
        />
        {isInvalid && <p className="error-text">name must not be empty.</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandling}
          value={email}
          onBlur={emailBlurHandling}
        />
        {emailInvalid && <p className="error-text">email must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
