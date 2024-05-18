type HeadingContainerProps = {
  children: React.ReactNode;
};

function HeadingContainer(props: HeadingContainerProps) {
  return (
    <div className="bg-pink-300 w-[600px] min-h-28 rounded-md drop-shadow-2xl flex items-center justify-center">
      {props.children}
    </div>
  );
}

export default HeadingContainer;
