import { useLocation } from "react-router-dom";

function RouterHistoryMove() {
    const location = useLocation();

    const data = location.state.data;

    return (
        <div>
            <p>{data.name}</p>
            <p>{data.age}</p>
        </div>
    )
}

export default RouterHistoryMove;