import {useEffect, useState} from 'react';

const UseForMousePosition = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onMouseMove = (e) => {
    setState({x: e.clientX, y: e.clientY});
  };
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);
  return state;
};

const UseMousePosition = () => {
  const {x, y} = UseForMousePosition();
  return (
    <>
      <h1 class="h1">6. use mouseposition</h1>
      <div>
        <p> mouse X : {x}</p>
        <p> mouse Y : {y}</p>
      </div>
    </>
  );
};

export default UseMousePosition;
