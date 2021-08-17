import React from 'react';

const Input = ({ label, style, onKeyDown }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        type='text'
        placeholder={label}
        style={style}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
const ForwardRef = React.forwardRef(Input);
export default ForwardRef;
