import "./App.css";
import { GridSystem, Template, Sidebar } from "./components/index";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Sidebar /> */}
        <GridSystem />
        {/* <Template /> */}
      </header>
    </div>
  );
};
