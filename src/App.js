import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/UserList";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | &nbsp;
          <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | &nbsp;
          <Link to="/input2">Input2</Link> | <Link to="/userList">UserList</Link> | &nbsp;
          <Link to="/movies">Movies</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<Input />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
