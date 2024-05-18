type InputProp = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProp) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChange(e);
  };

  return (
    <div className="mt-10 p-10">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="text-test"
        type="text"
        placeholder="Enter your text"
        value={props.value}
        // onChange={(event) => {
        //   props.handleChange(event);
        // }

        onChange={handleInputChange}
      />
    </div>
  );
}

export default Input;
