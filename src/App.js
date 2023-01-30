import {useTelegram} from "./hooks/useTelegram";

function App() {

    const {onClose} = useTelegram()

  return (
    <div className="App container mx-auto px-2">
      <div>close Window</div>
      <div>привет </div>
    </div>
  );
}

export default App;
