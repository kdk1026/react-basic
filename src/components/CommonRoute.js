import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Counter from "../pages/Counter";
import Input from "../pages/Input";
import Input2 from "../pages/Input2";
import UserList from "../pages/UserList";
import Movies from "../pages/Movies";
import Param1 from "../pages/Param1";
import Param2 from "../pages/Param2";
import Param3 from "../pages/Param3";
import LinkSendData from "../pages/LinkSendData";
import LinkReceiveData from "../pages/LinkReceiveData";
import Main from "../pages/Main";
import Articles from "../pages/article/Articles";
import Article from "../pages/article/Article";
import Focus from "../pages/Focus";
import TextArea from "../pages/TextArea";
import CheckBox from "../pages/CheckBox";
import Radio from "../pages/Radio";
import Select from "../pages/Select";
import InputFile from "../pages/InputFile";
import ReactSelect from "../pages/ReactSelect";
import ReactCookie from "../pages/ReactCookie";
import RouterHistory from "../pages/RouterHistory";
import RouterHistoryMove from "../pages/RouterHistoryMove";
import FileDownload from "../pages/FileDownload";
import FileUpload from "../pages/FileUpload";
import Parent from "../pages/Parent";
import Html from "../pages/Html";
import RouterQuery from "../pages/RouterQuery";

function CommonRoute() {
    return (
        <>
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
          <Route path="/main" element={<Main />}>
            <Route path="article" element={<Articles />} />
            <Route path="article/:id" element={<Article />} />
          </Route>
          <Route path="/focus" element={<Focus />} />
          <Route path="/textarea" element={<TextArea />} />
          <Route path="/checkbox" element={<CheckBox />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/select" element={<Select />} />
          <Route path="/inputFile" element={<InputFile />} />
          <Route path="/react-select" element={<ReactSelect />} />
          <Route path="/react-cookie" element={<ReactCookie />} />
          <Route path="/routerHistory" element={<RouterHistory />} />
          <Route path="/routerHistoryMove" element={<RouterHistoryMove />} />
          <Route path="/fileDownload" element={<FileDownload />} />
          <Route path="/fileUpload" element={<FileUpload />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/html" element={<Html />} />
          <Route path="/routerQuery" element={<RouterQuery />} />
        </Routes>
        </>
    )
}

export default CommonRoute;