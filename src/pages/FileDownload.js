import axios from "axios";
import { useState } from "react";

function FileDownload() {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleFileDownload = () => {
        setIsDownloading(true);
        const fileUrl = "https://cdn.pixabay.com/photo/2023/06/25/11/12/orange-flowers-8087066_1280.jpg";

        axios.get(fileUrl, {
            responseType: "blob"
        })
        .then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const a = document.createElement("a");
            a.href = url;
            a.download = fileUrl.split("/").pop() || "download";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            setIsDownloading(false);
        })
        .catch((err) => {
            console.error("파일 다운로드 오류: ", err);
            setIsDownloading(false);
        });
    };

    return (
        <div>
            {
                isDownloading ? <span>다운로드 중</span> :
                <button onClick={handleFileDownload}>파일 다운로드</button>
            }
        </div>
    )
}

export default FileDownload;