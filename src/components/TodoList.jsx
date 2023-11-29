import React, { useCallback, useEffect, useState } from "react";
import Task from "../task/Task";
import TaskIndicator from "./TaskIndicator";
import SearchTask from "./SearchTask";
import { useSelector, useDispatch } from "react-redux";
import { usePlaySound } from "../context/playSound";
import { removeTask, markTaskAsCompleted } from "../redux/actions";
import { useInputContext } from "../context/InputContext";
import { useAlert } from "../context/alertContext";

// import Modal from "../modal/Modal";

const TodoList = () => {
  // filter the todo by catogaries like
  const dispatch = useDispatch();
  const { showAlert } = useAlert();
  const [taskFilter, setTaskFilter] = useState("all");
  const { setInput, setEditModeId } = useInputContext();
  const todoItems = useSelector((state) => state.todoList);
  const [taskListToShow, setTaskListToShow] = useState(todoItems);
  const [search, setSearch] = useState("");
  const { onFilterChangeSound, onDeleteSound, onToggleSound, onEditSound } =
    usePlaySound();

  // optimtimization
  const changeTaskFilter = useCallback(
    (value) => {
      onFilterChangeSound();
      setTaskFilter(value);
    },
    [onFilterChangeSound]
  );

  const changeSearchText = useCallback((value) => setSearch(value), []);

  // task function which should not be recreated again and again
  const handleEditClick = useCallback(
    (id, todo) => {
      onEditSound();
      setInput(todo);
      setEditModeId(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Add smooth scrolling behavior
      });
    },
    [setInput, setEditModeId, onEditSound]
  );

  const remove = useCallback(
    (id) => {
      try {
        onDeleteSound();
        dispatch(removeTask(id));
        setEditModeId(null);
        setInput({ title: "", description: "", due: "" });
        showAlert("success", "Successfully removed the todo!");
      } catch (error) {
        showAlert("danger", "Failed to remove the todo!");
      }
    },
    [dispatch, onDeleteSound, setEditModeId, setInput, showAlert]
  );

  const markCompleted = useCallback(
    (id) => {
      try {
        onToggleSound();
        dispatch(markTaskAsCompleted(id));
        showAlert(
          "success",
          "Successfully marked the todo completed/uncompleted!"
        );
      } catch (error) {
        showAlert("danger", "Failed to mark the todo completed/uncompleted!");
      }
    },
    [dispatch, onToggleSound, showAlert]
  );

  // indicator conditions
  useEffect(() => {
    // search
    function searchWithFilter(task) {
      return task.title.toLowerCase().includes(search.toLowerCase());
    }

    switch (taskFilter) {
      case "all":
        setTaskListToShow(
          todoItems.filter((task) =>
            task.title.toLowerCase().includes(search.toLowerCase())
          )
        );
        break;
      case "completed":
        setTaskListToShow(
          todoItems.filter((task) => task.isCompleted && searchWithFilter(task))
        );
        break;
      case "uncompleted":
        setTaskListToShow(
          todoItems.filter(
            (task) => !task.isCompleted && searchWithFilter(task)
          )
        );
        break;
      case "overdue":
        setTaskListToShow(
          todoItems.filter(
            (task) =>
              task.due < Date.now() &&
              !task.isCompleted &&
              searchWithFilter(task)
          )
        );
        break;
      default:
        throw new Error("Unknown action!");
    }
  }, [taskFilter, todoItems, search]);

  return (
    <>
      <section
        id="todo-list"
        className="my-5 d-flex  flex-column justify-content-center align-items-center "
        style={{ height: "75vh" }}
      >
        <TaskIndicator
          taskFilter={taskFilter}
          changeTaskFilter={changeTaskFilter}
        />
        <SearchTask search={search} changeSearchText={changeSearchText} />

        <div
          className="col-12 col-md-10 col-lg-8 d-flex justify-content-center align-items-start   border border-1 border-tertiory"
          style={{ overflowY: "auto", height: "450px" }}
        >
          <div className="row w-100">
            {taskListToShow && taskListToShow.length !== 0 ? (
              taskListToShow.map((task, index) => (
                <div
                  key={index}
                  className="col-12  col-md-6 d-flex justify-content-center p-0 "
                >
                  <Task
                    task={task}
                    id={task.id}
                    handleEditClick={handleEditClick}
                    remove={remove}
                    markCompleted={markCompleted}
                  />
                </div>
              ))
            ) : (
              <div className=" w-100  h-100 d-flex justify-content-center  align-items-center ">
                <p>No Todos</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
