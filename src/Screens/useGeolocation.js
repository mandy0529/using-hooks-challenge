import {useEffect, useState} from 'react';

let mounted = false;

const UseForGeolocation = () => {
  const initialState = {
    latitude: 0,
    longitude: 0,
    error: 'no',
  };
  const [state, setState] = useState(initialState);
  const onEvent = (event) => {
    if (mounted) {
      setState({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        error: 'no error',
      });
    }
  };
  const onError = (error) => {
    setState(error);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(onEvent, onError);
    mounted = true;
    return () => {
      mounted = false;
    };
  }, []);
  return state;
};

const UseGeolocation = () => {
  const getGeolocation = UseForGeolocation();
  return (
    <>
      <h1 className="h1">3. use geolocation</h1>
      <p>{`latitude : ${getGeolocation.latitude}`}</p>
      <p>{`longitude : ${getGeolocation.longitude}`}</p>
      <p>{` errorType : ${getGeolocation.error}`}</p>
    </>
  );
};

export default UseGeolocation;
