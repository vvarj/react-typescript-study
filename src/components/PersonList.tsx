// type PersonListProps = {
//   names: {
//     first: string;
//     last: string;
//   }[];
// };

import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      <h2 className="text-4xl text-fuchsia-900">NAME LIST</h2>
      <ul>
        {props.names.map((name) => (
          <li
            className="list-disc"
            key={name.first}
          >{`${name.first} ${name.last}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default PersonList;
