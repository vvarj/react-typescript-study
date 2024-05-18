type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div className="flex justify-center items-center">
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} !! , you have ${messageCount} unread messages`
          : "Welcome Guest"}
      </h2>
    </div>
  );
}

export default Greet;
