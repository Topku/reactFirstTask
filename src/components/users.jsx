import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((users) => users !== userId));
  };

  const renderPhrase = (number) => {
    if (number % 10 === 1) {
      return (
        <h2>
          <span className="badge bg-primary">
            {number} человек тусанет с тобой сегодня{" "}
          </span>
        </h2>
      );
    }
    if (number === 11 || number === 12 || number === 13 || number === 14) {
      <h2>
        <span className="badge bg-primary">
          {number} человек тусанет с тобой сегодня{" "}
        </span>
        ;
      </h2>;
    }
    if (number % 10 === 2 || number % 10 === 3 || number % 10 === 4) {
      return (
        <h2>
          <span className="badge bg-primary">
            {number} человека тусанет с тобой сегодня{" "}
          </span>
        </h2>
      );
    }
    return (
      <h2>
        <span className="badge bg-primary">
          {number} человек тусанет с тобой сегодня{" "}
        </span>
      </h2>
    );
  };

  const renderQualities = (qualities) => {
    return qualities.map((qualitie) => (
      <span key={qualitie.name} className={getBadgeClasses(qualitie)}>
        {qualitie.name}
      </span>
    ));
  };

  const getBadgeClasses = (color) => {
    let classes = "badge m-2 ";
    classes += "bg-";
    classes += color.color;
    return classes;
  };

  const renderUsers = () => {
    return (
      users.length !== 0 &&
      users.map((user) => (
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{renderQualities(user.qualities)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <button
              className="btn btn-danger btn-sm m-2"
              onClick={() => handleDelete(user)}
            >
              delete
            </button>
          </td>
        </tr>
      ))
    );
  };
  if (users.length != 0) {
    return (
      <div>
        {renderPhrase(users.length)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
            </tr>
            {renderUsers()}
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
