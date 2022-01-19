const users = [
    {
        id: 1,
        name: 'ryan',
    },
    {
        id: 2,
        name: 'joe',
    },
]

const db = {
    users: function find() {return new Promise((resolve, reject) => { resolve("hola")})}
}

const obtenerUsuario = async (id) =>
{
    try {
        const user = await db.users.find(user => user.id === id);
        const role =  await user.role;
        // return role;
        res.status(200).json( role );
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener usuario',
        });
        // return error;
    }
}

const user = obtenerUsuario(2)

const obtenerUsuarioThen = (id) =>
{
     db.users.find(user => user.id === id)
        .then( user => {
            return user;
        } )
        .then( user => {
            return user.role;
        })
}




