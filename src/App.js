import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import UserList from "./pages/UserList";
import Movies from "./pages/Movies";
import Param1 from "./pages/Param1";
import Param2 from "./pages/Param2";
import Param3 from "./pages/Param3";
import LinkSendData from "./pages/LinkSendData";
import LinkReceiveData from "./pages/LinkReceiveData";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | &nbsp;
          <Link to="/counter">Counter</Link> | <Link to="/input">Input</Link> | &nbsp;
          <Link to="/input2">Input2</Link> | <Link to="/userList">UserList</Link> | &nbsp;
          <Link to="/movies">Movies</Link> | <Link to="/param/20">Param (Path Variable)</Link> | &nbsp;
          <Link to="/param?q=aa&page=10">Param (Query String)</Link> | <Link to={{pathname: "/param", search: "?q=bb&page=20"}}>Param (Query String)</Link> | &nbsp;
          <Link to="/param2?q=aa&page=1">Param (Query String)</Link> | <Link to="/linkSendData">Link Send Data</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<Input />} />
          <Route path="/input2" element={<Input2 />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/param/:id" element={<Param1 />} />
          <Route path="/param" element={<Param2 />} />
          <Route path="/param2" element={<Param3 />} />
          <Route path="/linkSendData" element={<LinkSendData />} />
          <Route path="/linkReceiveData" element={<LinkReceiveData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
