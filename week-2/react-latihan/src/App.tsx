import { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import type { User } from "./types/user"

export default function App() {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Latihan Handle submit</h1>
      <UserForm onAddUser={addUser}/>
      <UserList users={users}/>
    </div>
  );
}