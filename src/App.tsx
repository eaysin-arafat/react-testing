import "./App.css";
import { Greet } from "./components/Greet";
import { MuiMode } from "./components/MuiMode";
import { AppProviders } from "./prividers/AppProviders";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Greet />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
