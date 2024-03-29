import React from "react";
import User from "./user";
import "bootstrap/dist/css/bootstrap.css";

const Users = ({ users, onDelete, onToggleBookMark }) => {
  let usersArray = Object.values(users);

  if (usersArray.length !== 0) {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
            </tr>
            {usersArray.map((user) => (
              <User
                key={user._id}
                handleBookmark={onToggleBookMark}
                handleDelete={onDelete}
                {...user}
              />
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
  return (
    <h2>
      <span className="badge bg-danger ">Никто с тобой не тусанет </span>
    </h2>
  );
};

export default Users;
