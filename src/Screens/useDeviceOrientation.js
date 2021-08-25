import {useEffect, useState} from 'react';

const UseForDeviceOrientation = () => {
  const initialState = {
    alpha: 0,
    beta: 0,
    gamma: 0,
  };
  const [orientation, setOrientaion] = useState(initialState);
  const handleOrientation = (e) => {
    setOrientaion({
      beta: e.beta,
      alpha: e.alpha,
      gamma: e.gamma,
    });
  };

  useEffect(() => {
    window.addEventListener('deviceorientation', handleOrientation);

    return () =>
      window.removeEventListener('deviceorientation', handleOrientation);
  }, []);
  return orientation;
};

const UseDeviceOrientation = () => {
  const orientaion = UseForDeviceOrientation();
  return (
    <>
      <h1>1. UseDeviceOrientation</h1>
      <p>Alpha: {orientaion.alpha}</p>
      <p>Beta: {orientaion.beta}</p>
      <p>Gamma: {orientaion.gamma}</p>
    </>
  );
};

export default UseDeviceOrientation;
