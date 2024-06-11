function Child(props) {
    const onUpdateHandler = () => {
        props.setData("data from child");
    };

    return (
        <>
            <button onClick={onUpdateHandler}>
                send data to parent
            </button>
        </>
    )
}

export default Child;