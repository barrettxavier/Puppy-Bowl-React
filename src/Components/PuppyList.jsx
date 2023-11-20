import { useEffect, useState } from "react";

const PuppyList = ({ setShowPuppyDetails }) => {
  const [allPuppyList, setAllPuppyList] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players"
      );
      const responseJson = await response.json();
      setAllPuppyList(responseJson.data.players);
    };
    getPuppies();
  }, []);

  return (
    <>
      <h1>Puppies</h1>

      {allPuppyList.map((singlePuppy) => {
        return (
          <div className="card-container" key={singlePuppy.id}>
            <div
              className="card"
              onClick={() => {
                setShowPuppyDetails(true);
              }}
            >
              {singlePuppy.name}
              <hr />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PuppyList;
