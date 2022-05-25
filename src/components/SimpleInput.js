import { useState, useEffect } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [touched, setTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameValid = name.trim() !== '';
  const isInvalid = !enteredNameValid && touched;

  useEffect(() => {
    if (enteredNameValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [enteredNameValid]);

  const inputHandling = (e) => {
    setName(e.target.value);
  };

  const inputBlurHandling = (e) => {
    setTouched(true);
  };

  const submitHandling = (e) => {
    e.preventDefault();

    setTouched(true);

    if (!enteredNameValid) {
      return;
    }
    console.log(name);
    setName('');
    setTouched(false);
  };

  const nameInputClasses = isInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandling}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputHandling}
          value={name}
          onBlur={inputBlurHandling}
        />
        {isInvalid && <p className="error-text">input must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
