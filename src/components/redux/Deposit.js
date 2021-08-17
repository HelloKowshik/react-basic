import { useSelector, useDispatch } from 'react-redux';
import * as balanceActions from '../../actions/balanceActions';

const Deposit = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loading = useSelector((state) => state.balanceReducer.loading);
  const dispatch = useDispatch();
  //   const addBalance = () => dispatch({ type: 'DEPOSIT', payload: 10 });
  const addBalance = () => dispatch(balanceActions.dipositAsync());
  return (
    <>
      {loading && <h1 className='title'>Loading...</h1>}
      <h1 className='title'>React Redux - Deposit</h1>
      <h3 className='name'>Total Balance: {balance}</h3>
      <button className='btn' onClick={addBalance}>
        Add Balance
      </button>
    </>
  );
};

export default Deposit;
