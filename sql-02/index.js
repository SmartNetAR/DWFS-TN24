
const { sequelize } = require('./database/sequelize');

async function getAlumnos() {
    try {
        const alumnos = await sequelize.query('SELECT * FROM alumnos', { type: sequelize.QueryTypes.SELECT });
        console.log(alumnos);
    } catch (error) {
        console.log("ERROR!!!: ",error)
    }

    // sequelize.query('SELECT * FROM alumnos', { type: sequelize.QueryTypes.SELECT })
    //     .then( (alumnos) => {
    //         console.log(alumnos);
    //     })
    //     .catch(error => console.log(error))
}

getAlumnos();