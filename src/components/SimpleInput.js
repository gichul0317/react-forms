import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  const inputHandling = (e) => {
    setName(e.target.value);
  };

  const submitHandling = (e) => {
    e.preventDefault();

    setTouched(true);

    if (name.trim() === '') {
      setValid(false);
      return;
    }
    setValid(true);
    console.log(name);
    setName('');
  };

  const isInvalid = !valid && touched;

  const nameInputClasses = isInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandling}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandling} value={name} />
        {isInvalid && <p className="error-text">input must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
