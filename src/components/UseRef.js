import { useEffect, useRef } from 'react';

const UseRef = () => {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const marriedRef = useRef(null);
  const submitRef = useRef(null);
  const keyPressHandle = (e) => {
    console.log(e.keyCode, 'OK');
    if (e.keyCode === 0) {
      console.log(e.keyCode, 'OK');
      if (e.target.id === 'name') ageRef.current.focus();
      else if (e.target.id === 'age') marriedRef.current.focus();
      else if (e.target.id === 'm') submitRef.current.focus();
    }
  };
  useEffect(() => nameRef.current.focus(), []);
  return (
    <div>
      <h1>useRefs Hook</h1>
      <div className='form-field'>
        <span>Name:</span>
        <input
          type='text'
          ref={nameRef}
          id='name'
          onKeyPress={keyPressHandle}
        />
      </div>
      <div className='form-field'>
        <span>Age:</span>
        <input type='text' ref={ageRef} id='age' onKeyPress={keyPressHandle} />
      </div>
      <div className='form-field'>
        <span>Married:</span>
        <input
          type='checkbox'
          ref={marriedRef}
          id='m'
          onKeyPress={keyPressHandle}
        />
      </div>
      <button
        type='submit'
        ref={submitRef}
        id='btn'
        onKeyPress={keyPressHandle}
      >
        Submit
      </button>
    </div>
  );
};

export default UseRef;
