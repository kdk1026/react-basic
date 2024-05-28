import { Link } from "react-router-dom";

function Articles() {
    return (
        <>
            <h1>Article 목록</h1>
            <ul>
                <li><Link to='/main/article/1'>Article 1번</Link></li>
                <li><Link to='/main/article/2'>Article 2번</Link></li>
                <li><Link to='/main/article/3'>Article 3번</Link></li>
            </ul>
        </>
    )
}

export default Articles;