import { useSelector, useDispatch } from 'react-redux';

const Withdraw = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const addBalance = () => dispatch({ type: 'WITHDRAW', payload: 10 });
  return (
    <>
      <h1 className='title'>React Redux - Withdraw</h1>
      <h3 className='name'>Total Balance: {balance}</h3>
      <button className='btn' onClick={addBalance}>
        Withdraw
      </button>
    </>
  );
};

export default Withdraw;
