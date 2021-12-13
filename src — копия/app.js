import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users !== userId));
  };
  return (
    <div>
      <Users {...users} />
    </div>
  );
}

export default App;
