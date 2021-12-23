
const repository = {};

repository.findByEmail = function (email) {
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com'
    };

    return user;
};

module.exports = repository;
