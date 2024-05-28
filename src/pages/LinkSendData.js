import { Link } from "react-router-dom";

function LinkSendData() {
    const data = {
        name: '홍길동',
        age: 20
    };

    return (
        <>
            <Link to="/linkReceiveData" state={{data: data}}>데이터 넘기기</Link>
        </>
    )
}

export default LinkSendData;