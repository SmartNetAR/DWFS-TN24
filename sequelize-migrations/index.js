const db = require('./models');

async function createUser () {
    const user = await db.User.create({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@mail.com'
    });

    console.log(user.toJSON());
}

async function findAllUsers () {
    const users = await db.User.findAll();
    // console.log(users);
    console.log(users.map( user => user.toJSON()))

}
findAllUsers();