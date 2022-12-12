import { useGlobal } from '../../providers/WatchProvider';
import DefaultWatchFace from '../watch-faces/default';
import Keypad from './components/keypad';
import './style.css';
function Lockscreen() {
  const { userPassword } = useGlobal();
  return (
    <div>
      <DefaultWatchFace />
     {
      //'<Keypad/>'
     }
    </div>
  )
}

export default Lockscreen