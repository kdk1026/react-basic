import { useState } from "react";

function Radio() {
    const [checkedGender, setCheckedGender] = useState("");

    const handleChange = (e) => {
        setCheckedGender(e.target.value);
    };

    return (
        <div>
            <div>Picked: {checkedGender}</div>

            <input type="radio" id="male" name="gender" value="male" onChange={handleChange} />
            <label for="male">남자</label>

            <input type="radio" id="female" name="gender" value="female" onChange={handleChange} />
            <label for="female">여자</label>
        </div>
    )
}

export default Radio;