import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import CommonRoute from "./components/CommonRoute";

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
          <Link to="/param2?q=aa&page=1">Param (Query String)</Link> | <Link to="/linkSendData">Link Send Data</Link> | &nbsp;
          <Link to="/main/article">Article 목록</Link> | <Link to="/focus">Focus</Link> | &nbsp;
          <Link to="/textarea">TextArea</Link> | <Link to="/checkbox">CheckBox</Link> | &nbsp;
          <Link to="/radio">Radio</Link> | <Link to="/select">Select</Link> | &nbsp;
          <Link to="/inputFile">InputFile</Link> | <Link to="/react-select">react-select</Link> | &nbsp;
          <Link to="/react-cookie">react-cookie</Link> | <Link to="/routerHistory">RouterHistory</Link> | &nbsp;
          <Link to="/fileDownload">파일 다운로드</Link> | <Link to="/fileUpload">파일 업로드</Link> | &nbsp;
          <Link to="/parent">자식'{'->'}'부모</Link>
        </nav>
        <CommonRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
