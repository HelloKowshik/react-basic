import React from 'react';

const NameTag = (props) => {
  const { first, second } = props;
  return (
    <div className='name'>
      <h3 style={props.style}>{first}</h3>
      <h3 style={props.style}>{second}</h3>
    </div>
  );
};

export default NameTag;
