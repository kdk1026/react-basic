import { useLocation } from "react-router-dom";

function LinkReceiveData() {
    const location = useLocation();

    const data = location.state.data;

    return (
        <>
            <p>{data.name}</p>
            <p>{data.age}</p>
        </>
    )
}

export default LinkReceiveData;