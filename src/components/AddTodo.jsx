import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addTask, editTask } from "../redux/actions";
import { useInputContext } from "../context/InputContext";
import { usePlaySound } from "../context/playSound";
import { useAlert } from "../context/alertContext";
const AddTodo = () => {
  //for unique id as array index will not work as expected
  // the reason using ref is that it will persist values between renders
  const counter = useRef(0);

  // alert
  const { showAlert } = useAlert();

  // input field context
  const { input, setInput, editModeId, setEditModeId } = useInputContext();

  // sound effect
  const { onAddClickSound } = usePlaySound();

  // input change of add todo
  const dispatch = useDispatch();

  // function to dispatch addTask action
  const addTodo = (e) => {
    try {
      onAddClickSound();
      e.preventDefault();
      dispatch(
        addTask({
          id: counter.current,
          title: input.title,
          description: input.description,
          isCompleted: false,
          due: Date.now() + Number.parseInt(input.due) * 60 * 60 * 1000,
        })
      );
      setInput({ title: "", description: "", due: "" });
      showAlert("success", "Todo successfully added!");
      counter.current++;
    } catch (error) {
      showAlert("danger", "Failed to add todo!");
    }
  };

  // update function
  const updateTodo = (e) => {
    try {
      onAddClickSound();
      e.preventDefault();
      dispatch(
        editTask(editModeId, {
          title: input.title,
          description: input.description,
          due: input.due * 60 * 60 * 1000 + Date.now(),
        })
      );
      setInput({ title: "", description: "", due: "" });
      setEditModeId(null);
      showAlert("success", "Todo successfully updated!");
    } catch (error) {
      showAlert("danger", "Failed to update todo!");
    }
  };

  return (
    <>
      <div
        className="container position-relative"
        style={{ marginTop: "6em", zIndex: "-1" }}
      >
        <h2 className=" text-capitalize ">add your first todo here </h2>
      </div>
      <div className="d-flex justify-content-center">
        <form
          className="add-edit-form row w-100 d-flex flex-column  justify-content-center align-items-center my-5 px-3"
          onSubmit={editModeId !== null ? updateTodo : addTodo}
        >
          <label htmlFor="add-todo" className="col-12 col-sm-8 col-md-6">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Add Your Task Title..."
              name="title"
              required
              maxLength={50}
              value={input.title}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </label>

          <label htmlFor="add-todo" className="col-12 col-sm-8 col-md-6">
            <input
              type="number"
              className="form-control py-2"
              placeholder="due time in hours..."
              name="due"
              required
              min={0}
              value={input.due}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </label>
          <label htmlFor="add-todo" className=" col-12 col-sm-8 col-md-6">
            <textarea
              type="text"
              className="form-control py-2"
              placeholder="Add Your Task Description..."
              name="description"
              required
              value={input.description}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </label>

          <button className=" col-8 col-sm-6 col-md-6 col-lg-4 col-xl-2 btn btn-success rounded-0  text-light py-2 px-5 rounded-3">
            {editModeId !== null ? "Upate Task" : "Add Task"}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
