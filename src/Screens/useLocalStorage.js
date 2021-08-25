import {useEffect, useState} from 'react';

export const UseForLocalStorage = (key, defaultValue) => {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const UseLocalStorage = () => {
  const [name, setName] = UseForLocalStorage('username', 'minji');
  return (
    <>
      <h1>5. use local storage</h1>
      <h3>{name}</h3>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={() => setName('minji')}>setvalue</button>
      <button onClick={() => setName(null)}>clear value</button>
    </>
  );
};

export default UseLocalStorage;
