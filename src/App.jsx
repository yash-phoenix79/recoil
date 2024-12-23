import { useRecoilValue, useRecoilState, useRecoilStateLoadable } from 'recoil'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, todosAtomFamily, totalNotificationsSelector } from './atoms'

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

    <Todos id={1}/>
    <Todos id={2}/>

   </>
  )
}

function Todos({id}){
  // const todo=useRecoilValue(todosAtomFamily(id))
  const [todo,setTodo]=useRecoilStateLoadable(todosAtomFamily(id))
  if(todo.state==='loading'){
    return(
      <div>
        Loading ...
      </div>
    )
  }else if(todo.state==='hasValue'){
    return (
      <div>
        {todo.contents.value}
      </div>
    )
  }
  
}

export default App
