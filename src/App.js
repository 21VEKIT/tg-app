import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

function App() {

  const {onClose, user, tg} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App container mx-auto px-2">
      <div onClick={onClose}>close Window</div>
      <div>привет - {user}</div>
    </div>
  );
}

export default App;
