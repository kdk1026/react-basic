import { Link, useParams } from "react-router-dom";

function Article() {
    const {id} = useParams();

    return (
        <>
            <h1>Article 상세</h1>
            <div>요청 id : {id}</div>
            <Link to="/main/article">목록</Link>
        </>
    )
}

export default Article;