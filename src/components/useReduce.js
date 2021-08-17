import { useReducer } from 'react';

const init = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUB':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReduceHook = () => {
  const [state, dispatch] = useReducer(reducer, init);
  const addCount = () => dispatch({ type: 'ADD' });
  const subCount = () => dispatch({ type: 'SUB' });
  return (
    <div>
      <h1 className='title'>Count:{state.count}</h1>
      <button className='btn' onClick={addCount}>
        Increment
      </button>
      <button
        className='btn-style'
        onClick={subCount}
        disabled={state.count === 0 ? true : false}
      >
        Decrement
      </button>
    </div>
  );
};

export default ReduceHook;
