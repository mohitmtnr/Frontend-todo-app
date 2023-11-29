import "./App.css";
import { Suspense, lazy } from "react";
import Alert from "./components/Alert";
const Footer = lazy(() => import("./components/Footer"));
const Navbar = lazy(() => import("./components/Navbar"));
const AddTodo = lazy(() => import("./components/AddTodo"));
const TodoList = lazy(() => import("./components/TodoList"));

function App() {
  return (
    <div
      className={`App flex-column align-items-center justify-content-center w-100 `}
    >
      <Suspense
        fallback={
          <section
            className="d-flex  justify-content-center align-items-center"
            style={{ height: "100vh", width: "100vw" }}
          >
            <p>Loading...</p>
          </section>
        }
      >
        <Navbar />
        <Alert />
        <AddTodo />
        <TodoList />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
