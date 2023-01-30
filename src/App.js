function App() {

  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()
  }

  const info = JSON.stringify(tg.initDataUnsafe)

  return (
    <div className="App container mx-auto px-2">
      <div onClick={onClose} C>close Window</div>
      <div>{info}</div>
    </div>
  );
}

export default App;
