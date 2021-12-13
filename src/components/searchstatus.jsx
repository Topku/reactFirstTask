const SearchStatus = (status) => {
  let props = status.number;
  if (props.number % 10 === 1) {
    return (
      <h2>
        <span className="badge bg-primary">
          {props.number} человек тусанет с тобой сегодня{" "}
        </span>
      </h2>
    );
  }
  if (props === 11 || props === 12 || props === 13 || props === 14) {
    return (
      <h2>
        <span className="badge bg-primary">
          {props} человек тусанет с тобой сегодня{" "}
        </span>
      </h2>
    );
  }
  if (props % 10 === 2 || props % 10 === 3 || props % 10 === 4) {
    return (
      <h2>
        <span className="badge bg-primary">
          {props} человека тусанет с тобой сегодня{" "}
        </span>
      </h2>
    );
  }
  return (
    <h2>
      <span className="badge bg-primary">
        {props} человек тусанет с тобой сегодня{" "}
      </span>
    </h2>
  );
};

export default SearchStatus;
