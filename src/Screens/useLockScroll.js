import {useState} from 'react';
import useScrollLock from 'use-scroll-lock';

const UseLockScroll = () => {
  const [enabled, setEnabled] = useState(false);
  useScrollLock(enabled);

  return (
    <div>
      <h1>8. use scroll lock</h1>
      <p>is locked now?</p>
      <p>{enabled ? 'yes' : 'no'}</p>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'unlock' : 'lock'}
      </button>
    </div>
  );
};

export default UseLockScroll;
