import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchstatus";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users !== userId));
  };
  const handleBookmark = (id) => {
    console.log(id);
  };
  if (users.length !== 0) {
    return (
      <>
        <SearchStatus key={users._id} number={users.length} />
        <Users {...users} />
      </>
    );
  }
  return (
    <h2>
      <span className="badge bg-danger ">Никто с тобой не тусанет </span>
    </h2>
  );
}

export default App;
