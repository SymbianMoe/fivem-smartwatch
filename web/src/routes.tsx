import { createBrowserRouter } from 'react-router-dom';
import Watch from './components/app/App';
import Loading from './components/loading/loading';
import Lockscreen from './components/lockscreen/locksreen';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Watch/>,
    children : [
      {
        path:"/",
      },
      {
        path:"/loading",
        element : <Loading/>
      },
      {
        path:"/lockscreen",
        element : <Lockscreen />
      },
    ]
  },
]);