import React from "react";
import Qualities from "./qualities";
import Bookmark from "./bookmark";
import "bootstrap/dist/css/bootstrap.css";

const User = (props) => {
  return (
    <tr key={props.name}>
      <td>{props.name}</td>
      <td>
        {props.qualities.map((qual) => (
          <Qualities key={qual._id} {...qual} />
        ))}
      </td>
      <td>{props.profession.name}</td>
      <td>{props.completedMeetings}</td>
      <td>{props.rate}</td>
      <Bookmark
        key={props.bookmark}
        _id={props._id}
        name={props.name}
        bookmark={props.bookmark}
        handleBookmark={props.handleBookmark}
      />
      <td>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => props.handleDelete(props._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
