type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <div>
      <h2 className="font-bold text-fuchsia-700 text-5xl">{props.children}</h2>
    </div>
  );
}
export default Heading;
