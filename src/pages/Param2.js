import { useSearchParams } from "react-router-dom";

function Param2() {
    const [params] = useSearchParams();

    return (
        <div>
            <h2>Param2 (Query String)</h2>
            <p>param1 : {params.get("q")} </p>
            <p>param2 : {params.get("page")} </p>
        </div>
    )
}

export default Param2;