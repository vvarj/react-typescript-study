import { useState } from "react";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import HeadingContainer from "./components/HeadingContainer";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import StyledContainer from "./components/StyledContainer";

function App() {
  const name = {
    first: "Thomas",
    last: "Shelby",
  };

  const [text, setText] = useState("random value");

  const nameList = [
    {
      first: "Rejith",
      last: "Singh",
    },
    {
      first: "Abhinav",
      last: "Kumar",
    },
    {
      first: "Harsh",
      last: "Chowhan",
    },
    {
      first: "Naveen",
      last: "Patnayak",
    },
    {
      first: "Vishnu",
      last: "Deo Sai",
    },
    {
      first: "Cornad",
      last: "Sangama",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-7">
      <h1 className="font-semibold text-center text-4xl">Welcome</h1>
      <Greet name="Tom" isLoggedIn={true} />
      <Person name={name} />
      <PersonList names={nameList} />
      <Status message="success" />
      <Heading>Heading 1</Heading>
      <Heading>This is Heading 2</Heading>
      <HeadingContainer>
        <Heading>This is Heading 2</Heading>
      </HeadingContainer>
      <Button handleClick={(event, id) => console.log("hai", event, id)} />
      <Input
        value={text}
        handleChange={(event) => {
          console.log("TYPING:", event.target.value);
          setText(event.target.value);
        }}
      />
      <StyledContainer
        styles={{
          color: "red",
          padding: 10,
          border: "1px solid black",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default App;
