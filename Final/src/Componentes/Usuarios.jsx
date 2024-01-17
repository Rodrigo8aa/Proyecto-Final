import PropTypes from 'prop-types'
const Usuarios= ({usuario}) => {
    return (
        <>
            {
                usuario.map((curUser) => {
                    const {id, name, email} = curUser;
                    const {street, city, zipcode} = curUser.address;

                    return (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })

            }
            
        </>
        
    )

}

Usuarios.propTypes = {
    usuario: PropTypes.array.isRequired,}
export default Usuarios;
