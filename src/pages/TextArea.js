import { useState } from "react";

function TextArea() {
    const [contentValue, setContentValue] = useState("");

    const onChange = (e) => {
        setContentValue(e.target.value);
    };

    return (
        <div>
            <textarea onChange={onChange}></textarea>
            <div>{contentValue}</div>
        </div>
    )
}

export default TextArea;