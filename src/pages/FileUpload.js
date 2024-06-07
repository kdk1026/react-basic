import { useState } from "react";

function FileUpload() {
    const [inputValue, setInputValue] = useState({
        countryCode: '',
        countryName: ''
    });

    const [imgFile, setImgFile] = useState(null);

    const onInputChange = (e) => {
        e.preventDefault();
        
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    };

    const onChangeImg  = (e) => {
        e.preventDefault();

        if ( e.target.files ) {
            const uploadFile = e.target.files[0];
            setImgFile(uploadFile);
        }
    };

    const onClickConfirm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("countryCode", inputValue.countryCode);
        formData.append("countryName", inputValue.countryName);
        formData.append("imgFile", imgFile);

        console.log( formData.get("countryCode") );
        console.log( formData.get("countryName") );
        console.log( formData.get("imgFile") );
    };

    return (
        <>
            <div>
                <input type="text" name="countryCode" onChange={onInputChange} />
            </div>
            <div>
                <input type="text" name="countryName" onChange={onInputChange} />
            </div>
            <div>
                <input type="file" name="imgFile" accept="image/*" onChange={onChangeImg} />
            </div>
            <button onClick={onClickConfirm}>콘솔 확인</button>
        </>
    )
}

export default FileUpload;