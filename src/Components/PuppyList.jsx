import { useEffect, useState } from "react";

const PuppyList = () => {
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

      {allPuppyList.map((singlePuppy) => (
        <div className="card" key={singlePuppy.id} onClick={() => {}}>
          {singlePuppy.name}
        </div>
      ))}
    </>
  );
};

export default PuppyList;
