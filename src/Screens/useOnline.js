import {useEffect, useState} from 'react';

const UseForOnline = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  });
  return status;
};

const UseOnline = () => {
  const status = UseForOnline();
  return (
    <>
      <h1 class="h1">7. use online</h1>
      <p>are we online ?</p>
      <p> → {status ? 'yes' : 'no'} </p>
    </>
  );
};

export default UseOnline;
