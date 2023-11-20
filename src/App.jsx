import { useState } from "react";
import "./App.css";
import PuppyList from "./Components/PuppyList";
import PuppyDetails from "./Components/PuppyDetails";
import Form from "./Components/Form";

function App() {
  const [showPuppyDetails, setShowPuppyDetails] = useState(false);
  const [singlePuppyDetails, setSinglePuppyDetails] = useState("");

  return (
    <>
      <h1>Puppy Bowl</h1>
      <Form />
      {showPuppyDetails ? (
        <PuppyDetails
          setShowPuppyDetails={setShowPuppyDetails}
          singlePuppyDetails={singlePuppyDetails}
        />
      ) : (
        <PuppyList
          setShowPuppyDetails={setShowPuppyDetails}
          setSinglePuppyDetails={setSinglePuppyDetails}
        />
      )}
    </>
  );
}

export default App;
