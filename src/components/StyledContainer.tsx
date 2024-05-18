type StyledContainerProps = {
  styles: React.CSSProperties;
};

function StyledContainer(props: StyledContainerProps) {
  return (
    <div style={props.styles}>
      <div className="text-lg">
        <p>This you can style dear !!</p>
      </div>
    </div>
  );
}

export default StyledContainer;
