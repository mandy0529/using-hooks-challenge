import {useEffect, useState} from 'react';

const UseForKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const upHandler = ({key}) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  const downHandler = ({key}) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);
  return keyPressed;
};

const UseKeyPress = () => {
  const happyPress = UseForKeyPress('h');
  const sadPress = UseForKeyPress('s');
  const robotPress = UseForKeyPress('r');
  const foxPress = UseForKeyPress('f');
  return (
    <>
      <h1 className="h1"> 4. use key press</h1>
      <div>
        <div className="btn">
          <p>pressed : H {happyPress && '😊'}</p>
        </div>
        <div className="btn">
          <p>pressed : S {sadPress && '😢'}</p>
        </div>
        <div className="btn">
          <p>pressed : R {robotPress && '🤖'}</p>
        </div>
        <div className="btn">
          <p>pressed : F {foxPress && '🦊'}</p>
        </div>
      </div>
    </>
  );
};

export default UseKeyPress;
