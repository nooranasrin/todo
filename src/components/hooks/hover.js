import { useState, useRef, useEffect } from 'react';

const useHover = function () {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseleave', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseleave', handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};
export { useHover };
