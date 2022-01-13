
const Sequelize = require('sequelize');

const path = 'mysql://root:secret@localhost:3306/alumnos';

exports.sequelize = new Sequelize(path);
