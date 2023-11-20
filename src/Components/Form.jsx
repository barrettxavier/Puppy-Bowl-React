const Form = () => {
  return (
    <form>
      <label>Puppy Name</label>
      <input type="text" />
      <label>Breed</label>
      <input type="text" />
      <label>Status</label>
      <input type="text" />
      <label>Image Url</label>
      <input type="text" />
      <button
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Add Pup
      </button>
    </form>
  );
};

export default Form;
