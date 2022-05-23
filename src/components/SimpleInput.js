import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');
  const [valid, setValid] = useState(true);

  const inputHandling = (e) => {
    setName(e.target.value);
  };

  const submitHandling = (e) => {
    e.preventDefault();

    if (name.trim() === '') {
      setValid(false);
      return;
    }
    setValid(true);
    console.log(name);
    setName('');
  };

  const nameInputClasses = valid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitHandling}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandling} value={name} />
        {!valid && <p className="error-text">input must not be empty.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
