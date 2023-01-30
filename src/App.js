import {useTelegram} from "./hooks/useTelegram";

function App() {

    const {onClose, user} = useTelegram()

    alert(user)

  return (
    <div className="App container mx-auto px-2">
      <div onClick={onClose}>close Window</div>
      <div>привет </div>
    </div>
  );
}

export default App;
