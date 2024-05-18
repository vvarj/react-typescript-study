type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button(props: ButtonProps) {
  return (
    <div>
      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={(event) => {
          props.handleClick(event, 101);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Button;
