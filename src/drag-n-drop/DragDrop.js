import { useState } from 'react';
import './Styles.css';

const initList = [1, 2, 3, 4, 5, 6];

const DragDrop = () => {
  const [list, setList] = useState(initList);
  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStartHandle = (e, index) => {
    setDraggedItem(list[index]);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragOverHandle = (index) => {
    const draggedOverItem = list[index];

    if (draggedOverItem === draggedItem) {
      return;
    }

    const items = list.filter((item) => item !== draggedItem);

    items.splice(index, 0, draggedItem);

    setList(items);
  };
  return (
    <div>
      <h3>Drag and Drop Project</h3>
      <ul>
        {list.map((item, idx) => {
          return (
            <li
              key={idx}
              onDragOver={() => onDragOverHandle(idx)}
              className='item-style'
            >
              <div draggable onDragStart={(e) => onDragStartHandle(e, idx)}>
                {item}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DragDrop;
