import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RouterHistory() {
    const navigate = useNavigate();

    useEffect(() => {
        // 데이터 없이 이동하는 경우
        //navigate("/routerHistoryMove");
        
        navigate("/routerHistoryMove", {
            state: {
                data : { name: '홍길동', age: 20 }
            }
        });
    }, [navigate]);

    return (
        <div>

        </div>
    )
}

export default RouterHistory;