import { useRecoilValue, useRecoilState } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './atoms'

function App() {

  const networkCount = useRecoilValue(networkAtom);
  const finalNetworkCount=networkCount>99?"99+":networkCount;
  const jobsCount = useRecoilValue(jobsAtom);
  const notificationsCount = useRecoilValue(notificationsAtom);
  const [messagesCount, setMessagesAtomCount] = useRecoilState(messagingAtom);
  const totalCount = useRecoilValue(totalNotificationsSelector);


  return (
   <>
   
    <button>Home</button>

    <button>Network ({finalNetworkCount})</button>
    <button>Jobs ({jobsCount})</button>
    <button>Messages ({messagesCount})</button>
    <button>Notifications ({notificationsCount})</button>

    <button>Me ({totalCount})</button>

   </>
  )
}

export default App
