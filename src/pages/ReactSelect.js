import { useState } from "react";
import Select from "react-select";

function ReactSelect() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div>
            <h1>react-select</h1>
            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
            <br />
            <Select 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                isMulti={true}
            />
        </div>
    )
}

export default ReactSelect;