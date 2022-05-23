import { useState } from 'react';

const SimpleInput = (props) => {
  const [name, setName] = useState('');

  const inputHandling = (e) => {
    setName(e.target.value);
  };

  const submitHandling = (e) => {
    e.preventDefault();

    console.log(name);
    setName('');
  };

  return (
    <form onSubmit={submitHandling}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={inputHandling} value={name} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
