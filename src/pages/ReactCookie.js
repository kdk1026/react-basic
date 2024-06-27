import { useState } from "react";
import { useCookies } from "react-cookie";

// import * as cookieUtil from "../utils/cookie";

function ReactCookie() {
    const [testCookie, setTestCookie] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies();

    const setCookieReact = () => {
        const afterDate = new Date();
        afterDate.setDate(afterDate.getDate() + 7);

        // cookieUtil.setCookie("test", "testValue", {expires : afterDate});
        setCookie("test", "testValue", {expires : afterDate});
    };

    const getCookieReact = () => {
        // const cookieVal = cookieUtil.getCookie("test");
        const cookieVal = cookies.test;
        setTestCookie(cookieVal);
    };

    const removeCookieReact = () => {
        // cookieUtil.removeCookie("test");
        removeCookie("test");
    };

    return (
        <div>
            <h1>react-cookie</h1>
            <button onClick={setCookieReact}>
               쿠키 설정 
            </button>
            <button onClick={getCookieReact}>
               쿠키 확인
            </button>
            <div>{testCookie}</div>
            <button onClick={removeCookieReact}>
               쿠키 삭제
            </button>
        </div>
    )
}

export default ReactCookie;