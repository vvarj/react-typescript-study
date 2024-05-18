import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function UserTypeAsserstion() {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "tom",
      email: "tom@testing.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is :{user.name}</div>
      <div>User email is :{user.email}</div>
    </div>
  );
}

export default UserTypeAsserstion;
