import { useState } from "react";
import { cookieUtil } from "../utils/cookie";

function ReactCookie() {
    const [testCookie, setTestCookie] = useState("");

    const setCookie = () => {
        const nowDate = new Date(Date.now());
        nowDate.setDate(+7);

        cookieUtil.setCookie("test", "testValue", {expires : nowDate});
    };

    const getCookie = () => {
        const cookieVal = cookieUtil.getCookie("test");
        setTestCookie(cookieVal);
    };

    const rmoveCookie = () => {
        cookieUtil.removeCookie("test");
    };

    return (
        <div>
            <h1>react-cookie</h1>
            <button onClick={setCookie}>
               쿠키 설정 
            </button>
            <button onClick={getCookie}>
               쿠키 확인
            </button>
            <div>{testCookie}</div>
            <button onClick={rmoveCookie}>
               쿠키 삭제
            </button>
        </div>
    )
}

export default ReactCookie;