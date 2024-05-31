import { useRef } from "react";

function Focus() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const onConfirm = () => {
        if ( !emailRef.current.value ) {
            alert("이메일을 입력해주세요.");
            emailRef.current.focus();
            return false;
        }

        if ( !passwordRef.current.value ) {
            alert("비밀번호를 입력해주세요.");
            passwordRef.current.focus();
            return false;
        }
    };

    return (
        <div>
            <input type="text" name="email" ref={emailRef} />
            <input type="password" name="password" ref={passwordRef} />
            <button onClick={onConfirm}>확인</button>
        </div>
    )
}

export default Focus;