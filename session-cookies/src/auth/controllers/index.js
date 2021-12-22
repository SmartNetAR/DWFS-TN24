
const authController = {};

authController.login = (req, res) => {
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john@doe.com'
    };
    if (true)
    {
        req.session.user = user;
        res.send('Bienvenido');
    }
    else
    {
        res.send('No estas autorizado');
    }
};

authController.me = (req, res) => {
    if (req.session.user)
    {
        const {user} = req.session;
        const expireIn = req.session.cookie.maxAge / 1000;
        const msg = `Bienvenido ${user.name}! Tu sesión expira en ${expireIn} segundos`;
        res.send({
            user,
            msg
        });
    }
    else
    {
        res.send('No estas autorizado');
    }
};

authController.logout = (req, res) => {
    req.session.destroy();
    res.send('Logout');
};

module.exports = authController;