import React from "react";

const Bookmark = (props) => {
  return (
    <td>
      <i
        className={props.bookmark ? "bi bi-bookmark-fill" : "bi bi-bookmark"}
        onClick={() => props.handleBookmark(props._id)}
      ></i>
    </td>
  );
};

export default Bookmark;
