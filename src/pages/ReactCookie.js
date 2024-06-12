import { useState } from "react";
import { useCookies } from "react-cookie";

// 됐었는데...안되네...
//import { cookieUtil } from "../utils/cookie";

function ReactCookie() {
    const [testCookie, setTestCookie] = useState("");

    const [cookies, setCookie, removeCookie] = useCookies(['test']);

    const setCookieReact = () => {
        const nowDate = new Date(Date.now());
        nowDate.setDate(+7);

        setCookie("test", "testValue", {expires : nowDate});
    };

    const getCookieReact = () => {
        // 콘솔로 찍어봤으나 새로고침 하면 사라짐...개발자 도구에도 안보임...
        const cookieVal = cookies.test;
        setTestCookie(cookieVal);
    };

    const removeCookieReact = () => {
        removeCookie("test")
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