import { useEffect } from "react";

const PuppyDetails = ({ setShowPuppyDetails }) => {
  return (
    <>
      <h2>Puppy Details</h2>
      <button onClick={() => setShowPuppyDetails(false)}>Back</button>
    </>
  );
};

export default PuppyDetails;
