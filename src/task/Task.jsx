import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const Task = ({ task, id, handleEditClick, remove, markCompleted }) => {
  return (
    <section
      className="d-flex w-100 flex-column justify-content-center border  border-1  border-tertiory my-3 mx-3 "
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <div
        className="py-0 px-2 border border-tertiory d-flex w-100 justify-content-between  align-items-center"
        style={{ width: "400px" }}
      >
        <h5
          className="my-0 mx-1  text-capitalize d-inline-block"
          style={{
            textDecoration: task.isCompleted ? "line-through" : "none",
          }}
        >
          {task.title}
        </h5>
        <div className="d-flex align-items-center ">
          <span
            className="p-2 btn task-individual-btn"
            onClick={() =>
              handleEditClick(id, {
                title: task.title,
                description: task.description,
                due: Math.round((task.due - Date.now()) / (1000 * 60 * 60)),
              })
            }
          >
            <EditNoteIcon fontSize="large" />
          </span>
          <label
            htmlFor="isCompleted"
            title="toggle between complete and incomplete"
            className="mx-3"
          >
            <input
              role="button"
              type="checkbox"
              className="form-check task-individual-btn"
              style={{ scale: "1.3" }}
              onChange={() => markCompleted(id)}
              checked={task.isCompleted}
            />
          </label>
          <span
            title="delete"
            role="button"
            className="p-2 btn task-individual-btn"
            onClick={() => remove(id)}
          >
            <DeleteIcon />
          </span>
        </div>
      </div>
      <div className=" text-start p-3">
        <p>{task.description}</p>
      </div>
    </section>
  );
};

export default Task;
