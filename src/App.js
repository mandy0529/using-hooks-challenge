import UseDeviceOrientation from './Screens/useDeviceOrientation';
import UseFavicon from './Screens/useFavicon';
import UseGeolocation from './Screens/useGeolocation';
import UseKeyPress from './Screens/useKeyPress';
import UseLocalStorage from './Screens/useLocalStorage';
import UseLockScroll from './Screens/useLockScroll';
import UseMousePosition from './Screens/useMousePosition';
import UseOnline from './Screens/useOnline';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <h1 className="title">minji hooks ⭐️</h1>
      <UseDeviceOrientation />
      <UseFavicon />
      <UseGeolocation />
      <UseKeyPress />
      <UseLocalStorage />
      <UseMousePosition />
      <UseOnline />
      <UseLockScroll />
    </div>
  );
}
