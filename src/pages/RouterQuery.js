import { useEffect, useState } from "react";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";

function RouterQuery() {
    const [params] = useSearchParams();

    const [page, setPage] = useState(params.get('page')||'1');

    const navigate = useNavigate();
    const { pathname } = useLocation;

    useEffect(() => {
        navigate({
            pathname: pathname,
            search: `?${createSearchParams({
                page: page,
            })}`,
        });
    }, [navigate, pathname, page]);

    const handlePage = (currentPage) => {
        setPage(currentPage);
    };

    return (
        <>
            <button onClick={() => {handlePage(1)}}>1</button>
            <button onClick={() => {handlePage(2)}}>2</button>
            <button onClick={() => {handlePage(3)}}>3</button>
        </>
    )
}

export default RouterQuery;