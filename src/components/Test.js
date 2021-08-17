import React from 'react';

const Test = (props) => {
  const { name, income } = props;
  return (
    <div className='name'>
      <h3>{name}</h3>
      <p>{income}</p>
    </div>
  );
};

export default Test;
