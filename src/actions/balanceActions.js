export const loading = () => {
  return { type: 'LOADING' };
};

export const diposit = () => {
  return { type: 'DEPOSIT', payload: 10 };
};

export const dipositAsync = () => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(diposit());
    }, 5000);
  };
};
