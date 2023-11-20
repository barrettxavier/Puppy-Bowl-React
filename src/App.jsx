import { useState } from "react";
import "./App.css";
import PuppyList from "./Components/PuppyList";
import PuppyDetails from "./Components/PuppyDetails";

function App() {
  const [showPuppyDetails, setShowPuppyDetails] = useState(false);

  return (
    <>
      <h1>Puppy Bowl</h1>
      {showPuppyDetails ? (
        <PuppyDetails setShowPuppyDetails={setShowPuppyDetails} />
      ) : (
        <PuppyList setShowPuppyDetails={setShowPuppyDetails} />
      )}
    </>
  );
}

export default App;
