import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter;