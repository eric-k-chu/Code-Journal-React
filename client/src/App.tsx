import { Header } from "./Components/Header";
import { Views } from "./Components/View";
import './styles.css';
import { useState } from "react";

function App() {
  const [showEntries, setShowEntries] = useState(true);
  return (
    <div className="light-gray">
      <Header onEntryClick={() => setShowEntries(!showEntries)} />
      <Views showEntries={showEntries} />
    </div>
  );
}

export default App;
