import { useState } from "react";
import Child from "../components/Child";

function Parent() {
    const [data, setData] = useState("initial data");
    return (
        <>
            <div>{data}</div>
            <Child setData={setData} />
        </>
    )
}

export default Parent;