import { useState } from "react";

function CheckBox() {
    const [checkedValues, setCheckedValues] = useState([]);

    const handleChange = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;

        if ( checked ) {
            setCheckedValues(pre => [...pre, value]);
        } else {
            setCheckedValues(pre => {
                return [...pre.filter(skill => skill !== value)]
            });
        }
    };

    return (
        <div>
            <input type="checkbox" id="male" value="male" onChange={handleChange} />
            <label for="male">남자</label>
            <input type="checkbox" id="female" value="female" onChange={handleChange} />
            <label for="female">여자</label>
            <br/>
            <span>체크한 이름: {JSON.stringify(checkedValues, null, 2)}</span>
        </div>
    )
}

export default CheckBox;