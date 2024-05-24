function User({userData}) {
    return (
        <>
            <tr>
                <td>{userData.name}</td>
                <td>{userData.email}</td>
            </tr>
        </>
    )
}

export default User;