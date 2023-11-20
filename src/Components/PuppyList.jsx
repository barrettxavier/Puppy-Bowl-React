import { useEffect, useState } from "react";

const PuppyList = ({ setShowPuppyDetails, setSinglePuppyDetails }) => {
  const [allPuppyList, setAllPuppyList] = useState([]);

  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players"
      );
      const responseJson = await response.json();
      setAllPuppyList(responseJson.data.players);
      console.log(responseJson.data);
    };
    getPuppies();
  }, []);

  return (
    <>
      <h2>Puppies</h2>

      {allPuppyList.map((singlePuppy) => {
        return (
          <div className="card-container" key={singlePuppy.id}>
            <div
              className="card"
              onClick={() => {
                setShowPuppyDetails(true);
                setSinglePuppyDetails(singlePuppy);
              }}
            >
              {singlePuppy.name}
              <hr />
              <img
                className="img"
                src={singlePuppy.imageUrl}
                alt={`${singlePuppy.name} Image`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PuppyList;
