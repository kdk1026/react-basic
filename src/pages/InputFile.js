import { useState } from "react";

function InputFile() {
    const [fileInfo, setFileInfo] = useState({});
    const [imgUrl, setImgUrl] = useState("");

    const fileChange = (e) => {
        setFileInfo(e.target.files[0]);
        previewImage(e);
    };

    const previewImage = (e) => {
        return new Promise(resolve => {
            const fileReader = new FileReader();
            fileReader.onload = event => {
                resolve(event.target.result);
                setImgUrl(event.target.result);
            }
            fileReader.readAsDataURL(e.target.files[0]);
        });
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={fileChange} />
            <div>
                <p>파일명 : {fileInfo.name}</p>
                <p>사이즈 : {fileInfo.size}</p>
                <p>MimeType : {fileInfo.type}</p>
            </div>
            <div>
                <img src={imgUrl} />
            </div>
        </div>
    )
}

export default InputFile;