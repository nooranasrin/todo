import { useState } from 'react';

const useHover = (initialState = false) => {
  const [isOnHover, setIsOnHover] = useState(initialState);
  const onMouseOver = () => setIsOnHover(true);
  const onMouseLeave = () => setIsOnHover(false);
  return [isOnHover, onMouseOver, onMouseLeave];
};

export { useHover };
