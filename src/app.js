import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";
import SearchStatus from "./components/searchstatus";

function App() {
  let [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users._id !== userId));
  };
  const handleBookmark = (id) => {
    users.map(function (user) {
      if (user._id === id) {
        user.bookmark = !user.bookmark;
      }
    });
    setUsers((prevState) => prevState.filter((users) => users.name !== id));
  };
  if (users.length !== 0) {
    return (
      <>
        <SearchStatus key={users._id} number={users.length} />
        <Users
          onDelete={handleDelete}
          onToggleBookMark={handleBookmark}
          users={users}
        />
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
