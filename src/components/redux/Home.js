import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();
  const applyForLoan = () => dispatch({ type: 'APPLY' });
  return (
    <>
      <h1 className='title'>React Redux - Home</h1>
      <h3 className='name'>Total Balance: {balance}</h3>
      <h3 className='name'>{loan ? 'Applied For Loan' : 'Apply For Loan'}</h3>
      <button
        className='btn'
        disabled={loan ? true : false}
        onClick={applyForLoan}
      >
        APPLY LOAN
      </button>
    </>
  );
};

export default Home;
