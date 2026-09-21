import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer
} from "react";

import "./App.css";


/* =====================================================
   Q7 : CONTEXT API - THEME
   ===================================================== */

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}


/* =====================================================
   Q1 : FUNCTIONAL COMPONENT + JSX
   ===================================================== */

function Welcome() {
  return (
    <div>
      <h2>1. Welcome Message</h2>

      <h3>Welcome to ReactJS</h3>

      <p>Name: Ujwala</p>
      <p>Department: Computer Science</p>
    </div>
  );
}


/* =====================================================
   Q2 : PROPS
   ===================================================== */

function StudentInfo({ name, rollNo, course }) {
  return (
    <div>
      <h2>2. Student Information</h2>

      <p>Name: {name}</p>
      <p>Roll Number: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function StudentApp() {
  return (
    <StudentInfo
      name="Ujwala"
      rollNo="23CS101"
      course="Computer Science"
    />
  );
}


/* =====================================================
   Q3 : useState COUNTER
   ===================================================== */

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>3. Counter</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}


/* =====================================================
   Q4 : FORM + useState + EVENT HANDLING
   ===================================================== */

function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSubmittedName(name);
    setSubmittedEmail(email);
  }

  return (
    <div>
      <h2>4. Student Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <button type="submit">
          Submit
        </button>

      </form>

      {submittedName && (
        <div>
          <h3>Submitted Information</h3>

          <p>Name: {submittedName}</p>
          <p>Email: {submittedEmail}</p>
        </div>
      )}
    </div>
  );
}


/* =====================================================
   Q5 : DIGITAL CLOCK + useEffect + CLEANUP
   ===================================================== */

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div>
      <h2>5. Digital Clock</h2>

      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}


/* =====================================================
   Q6 : FETCH API + useEffect
   ===================================================== */

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")

      .then((response) => {

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })

      .then((data) => {
        setUsers(data);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, []);

  return (
    <div>
      <h2>6. Users from API</h2>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


/* =====================================================
   Q7 : CONTEXT API - LIGHT/DARK THEME
   ===================================================== */

function ThemeComponent() {
  const { dark, setDark } = useContext(ThemeContext);

  const style = {
    backgroundColor: dark ? "#222" : "#eee",
    color: dark ? "white" : "black",
    padding: "20px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>

      <h2>7. Theme Switcher</h2>

      <p>
        Current Theme: {dark ? "Dark" : "Light"}
      </p>

      <button onClick={() => setDark(!dark)}>
        Switch Theme
      </button>

    </div>
  );
}


/* =====================================================
   Q8 : SHOPPING CART
   ===================================================== */

function Product({ name, price, addToCart }) {
  return (
    <div className="product">

      <p>
        <strong>{name}</strong> - ₹{price}
      </p>

      <button onClick={() => addToCart({ name, price })}>
        Add to Cart
      </button>

    </div>
  );
}

function Cart() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];

    newCart.splice(index, 1);

    setCart(newCart);
  }

  return (
    <div>
      <h2>8. Shopping Cart</h2>

      <Product
        name="Laptop"
        price={50000}
        addToCart={addToCart}
      />

      <Product
        name="Headphones"
        price={2000}
        addToCart={addToCart}
      />

      <Product
        name="Mouse"
        price={800}
        addToCart={addToCart}
      />

      <h3>Cart Items</h3>

      {cart.length === 0 && (
        <p>Cart is empty</p>
      )}

      <ul>
        {cart.map((item, index) => (
          <li key={index}>

            {item.name} - ₹{item.price}

            <button
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}


/* =====================================================
   Q9 : ATTENDANCE - useReducer + Context API
   ===================================================== */

const AttendanceContext = createContext();

const initialAttendance = {
  Ujwala: false,
  Rahul: false,
  Priya: false
};

function attendanceReducer(state, action) {

  switch (action.type) {

    case "MARK_PRESENT":
      return {
        ...state,
        [action.name]: true
      };

    case "MARK_ABSENT":
      return {
        ...state,
        [action.name]: false
      };

    default:
      return state;
  }
}

function AttendanceProvider({ children }) {

  const [attendance, dispatch] = useReducer(
    attendanceReducer,
    initialAttendance
  );

  return (
    <AttendanceContext.Provider
      value={{ attendance, dispatch }}
    >
      {children}
    </AttendanceContext.Provider>
  );
}

function Attendance() {

  const { attendance, dispatch } =
    useContext(AttendanceContext);

  return (
    <div>

      <h2>9. Student Attendance</h2>

      {Object.keys(attendance).map((student) => (

        <div className="attendance-row" key={student}>

          <span>
            <strong>{student}</strong>:{" "}
            {attendance[student]
              ? "Present"
              : "Absent"}
          </span>

          <button
            onClick={() =>
              dispatch({
                type: "MARK_PRESENT",
                name: student
              })
            }
          >
            Present
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "MARK_ABSENT",
                name: student
              })
            }
          >
            Absent
          </button>

        </div>

      ))}

    </div>
  );
}


/* =====================================================
   Q10 : TASK MANAGEMENT
   Context + useState + useEffect
   ===================================================== */

const TaskContext = createContext();

function TaskProvider({ children }) {

  const [tasks, setTasks] = useState([]);

  // Load saved tasks
  useEffect(() => {

    const savedTasks =
      JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }

  }, []);

  // Save tasks
  useEffect(() => {

    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );

  }, [tasks]);

  function addTask(task) {

    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
  }

  function deleteTask(index) {

    setTasks(
      tasks.filter((_, i) => i !== index)
    );

  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

function TaskManager() {

  const {
    tasks,
    addTask,
    deleteTask
  } = useContext(TaskContext);

  const [task, setTask] = useState("");

  function handleAdd() {

    addTask(task);

    setTask("");

  }

  return (
    <div>

      <h2>10. Task Management</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Task
      </button>

      <ul>

        {tasks.map((item, index) => (

          <li key={index}>

            {item}

            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}


/* =====================================================
   MAIN APP
   ===================================================== */

function App() {

  return (
    <div className="app">

      <h1 className="app-title">
        ReactJS Assignment
      </h1>

      <p className="subtitle">
        React Functional Components, Hooks, Props and Context API
      </p>


      {/* Q1 */}
      <section className="section">
        <Welcome />
      </section>


      {/* Q2 */}
      <section className="section">
        <StudentApp />
      </section>


      {/* Q3 */}
      <section className="section">
        <Counter />
      </section>


      {/* Q4 */}
      <section className="section">
        <StudentForm />
      </section>


      {/* Q5 */}
      <section className="section">
        <DigitalClock />
      </section>


      {/* Q6 */}
      <section className="section">
        <Users />
      </section>


      {/* Q7 */}
      <section className="section">
        <ThemeProvider>
          <ThemeComponent />
        </ThemeProvider>
      </section>


      {/* Q8 */}
      <section className="section">
        <Cart />
      </section>


      {/* Q9 */}
      <section className="section">
        <AttendanceProvider>
          <Attendance />
        </AttendanceProvider>
      </section>


      {/* Q10 */}
      <section className="section">
        <TaskProvider>
          <TaskManager />
        </TaskProvider>
      </section>

    </div>
  );
}

export default App;