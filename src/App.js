function App() {

  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()
  }

  return (
    <div className="App">
      <div onClick={onClose} C>close Window</div>
    </div>
  );
}

export default App;
