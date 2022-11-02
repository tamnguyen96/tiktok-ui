const { useState, useEffect } = require('react');

function useDebounce(value, delay) {
  console.log(value);
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      console.log('setDebounce');
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
