import {useEffect, useState} from 'react';

const url = {
  googleUrl: 'https://www.google.com/favicon.ico',
  youtubeUrl: 'https://s.ytimg.com/yts/img/favicon-vfl8qSV2F.ico',
  facebookUrl: 'https://www.facebook.com/favicon.ico',
};

const UseForFavicon = () => {
  const initialIcon = document.getElementById('favicon');
  const [url, setUrl] = useState(initialIcon);

  const changeUrl = (href) => {
    initialIcon.href = href;
    const newIcon = initialIcon.href;
    return setUrl(newIcon);
  };

  useEffect(() => {
    changeUrl;
  }, []);

  return changeUrl;
};

function UseFavicon() {
  const minji = UseForFavicon();
  const {googleUrl, youtubeUrl, facebookUrl} = url;

  return (
    <div>
      <h1 className="h1">2. changing favicon</h1>
      <button onClick={() => minji(googleUrl)}>Google</button>
      <button onClick={() => minji(youtubeUrl)}>youtube</button>
      <button onClick={() => minji(facebookUrl)}>facebook</button>
    </div>
  );
}

export default UseFavicon;
