function Html() {
    const h2 = '<h2>테스트</h2>';

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: h2}}></div>
        </>
    )
}

export default Html;