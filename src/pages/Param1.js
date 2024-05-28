import { useParams } from "react-router-dom"

function Param1() {
    const {id} = useParams();

    return (
        <div>
            <h2>Param1 (Path Variable)</h2>
            <p>요청 id : {id} </p>
        </div>
    )
}

export default Param1;