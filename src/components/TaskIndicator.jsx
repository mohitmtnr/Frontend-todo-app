import React, { memo } from "react";

const TaskIndicator = ({ taskFilter, changeTaskFilter }) => {
  return (
    <div className="container">
      <div className="task-indicator">
        <button
          onClick={() => changeTaskFilter("all")}
          className={`btn ${
            taskFilter === "all" || taskFilter === "search"
              ? "btn-success"
              : "btn-tertiory"
          }`}
        >
          All
        </button>
        <button
          onClick={() => changeTaskFilter("completed")}
          className={`btn ${
            taskFilter === "completed" ? "btn-success" : "btn-tertiory"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => changeTaskFilter("uncompleted")}
          className={`btn ${
            taskFilter === "uncompleted" ? "btn-success" : "btn-tertiory"
          }`}
        >
          Uncompleted
        </button>
        <button
          onClick={() => changeTaskFilter("overdue")}
          className={`btn ${
            taskFilter === "overdue" ? "btn-success" : "btn-tertiory"
          }`}
        >
          Overdue
        </button>
      </div>
    </div>
  );
};

export default memo(TaskIndicator);
