const init = {
  loan: false,
};

const loanReducer = (state = init, action) => {
  switch (action.type) {
    case 'APPLY':
      return { loan: true };
    default:
      return state;
  }
};

export default loanReducer;
