import AddTimer from "./components/UI/AddTimer";
import Header from "./components/UI/Header";
import Timers from "./components/UI/Timers";
import TimersContextProvider from "./components/store/timers-context";

function App() {
  return (
    <TimersContextProvider>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </TimersContextProvider>
  );
}

export default App;
