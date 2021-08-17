const init = {
  balance: 0,
  loading: false,
};

const reducer = (state = init, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.payload, loading: false };
    case 'WITHDRAW':
      return { balance: state.balance - action.payload, loading: false };
    case 'LOADING':
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default reducer;
