import { useEffect, useState } from 'react';

const initXY = { x: null, y: null };

const Clock = () => {
  const [dateTime, setDateTime] = useState(Date);
  const [xy, setXY] = useState(initXY);

  useEffect(() => {
    let timer = setInterval(() => setDateTime(Date), 1000);
    return () => clearInterval(timer);
  });

  const mouseMoveHandle = (e) => setXY({ x: e.clientX, y: e.clientY });
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandle);
    return () => window.removeEventListener('mousemove', mouseMoveHandle);
  });

  return (
    <div>
      <h2>Date & Time: {dateTime}</h2>
      <h3>{`x:${xy.x}, y:${xy.y}`}</h3>
    </div>
  );
};

export default Clock;
