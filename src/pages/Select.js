import { useState } from "react";

function Select() {
    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    const [multiSel, setMultiSel] = useState([]);

    const handleChangeMulti = (e) => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setMultiSel(value);
    };

    return (
        <div>
            <div>Selected: {selectedValue}</div>

            <select onChange={handleChange}>
                <option value="" disabled>-- 선택 --</option>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="lemon">레몬</option>
            </select>

            <br/><br/>

            <div>Multi Selected: {JSON.stringify(multiSel, null, 2)}</div>

            <select onChange={handleChangeMulti} multiple>
                <option value="" disabled>-- 선택 --</option>
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="lemon">레몬</option>
            </select>
        </div>
    )
}

export default Select;