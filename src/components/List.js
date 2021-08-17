import React from 'react';

const List = ({
  name,
  calorie,
  removeItem,
  editable,
  toggleItem,
  changeItem,
  index,
}) => {
  return (
    <div className='name'>
      {editable ? (
        <input
          type='text'
          onKeyPress={(e) => changeItem(e, index)}
          defaultValue={name}
        />
      ) : (
        <h3 onDoubleClick={toggleItem}>{name}</h3>
      )}
      <p>{calorie}</p>
      <button className='btn' name={name} onClick={removeItem}>
        Remove
      </button>
    </div>
  );
};

export default List;
