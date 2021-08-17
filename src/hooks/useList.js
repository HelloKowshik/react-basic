import { useState } from 'react';

function useList(init) {
  const [list, setList] = useState(init);

  return {
    list,
    remove(item) {
      const filteredList = list.filter((i) => i.name !== item);
      setList(filteredList);
    },
    save(index, newValue) {
      const copiedItems = [...list];
      copiedItems[index].name = newValue;
    },
  };
}

export default useList;
