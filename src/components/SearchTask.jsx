import React, { memo } from "react";

const SearchTask = ({ changeSearchText }) => {
  let timer;
  const onChangeSearchBox = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => changeSearchText(e.target.value), 500);
  };

  return (
    <form className="row w-100 px-3 d-flex justify-content-center">
      <label
        htmlFor="add-todo"
        className="p-0 col-12 col-sm-10 col-md-8 col-lg-6  mb-3"
      >
        <input
          type="text"
          className="form-control py-2"
          placeholder="Search..."
          onChange={onChangeSearchBox}
        />
      </label>
    </form>
  );
};

export default memo(SearchTask);
