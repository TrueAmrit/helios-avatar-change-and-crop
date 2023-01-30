import "./App.css";
import { ApplicationContextProvider } from "./components/app-context";
import Form from "./components/mainForm/form";

function App() {
  return (
    <div className="App">
      <ApplicationContextProvider>
        <Form />
      </ApplicationContextProvider>
    </div>
  );
}

export default App;
