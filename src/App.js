function App() {

  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()

    console.log('test')
  }

  return (
    <div className="App">
      <div onClick={onClose} C>close Window</div>
    </div>
  );
}

export default App;
