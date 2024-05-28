import { useSearchParams } from "react-router-dom";

function Param3() {
    const [params, setParams] = useSearchParams();

    const movePage = (pageNumber) => {
        params.set('page', pageNumber);
        setParams(params);
    };

    const appendSort = () => {
        if ( !params.get('sort') ) {
            params.append('sort', 'asc');
            setParams(params);
        }
    };

    return (
        <div>
            <h2>Param3 (Set Query String)</h2>
            <p>고정 param : {params.get('q')} </p>
            <p>변경 param : {params.get('page')} </p>
            <p>추가 param : {params.get('sort')} </p>
            <div>
                <button onClick={() => movePage(1)}>1</button>
                <button onClick={() => movePage(2)}>2</button>
                <button onClick={() => movePage(3)}>3</button>
            </div>
            <div>
                <button onClick={appendSort}>추가</button>
            </div>
        </div>
    )
}

export default Param3;