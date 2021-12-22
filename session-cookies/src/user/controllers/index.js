
const userController = {};

userController.index = (req, res) => {
    res.send('User index');
};

userController.showProfile = (req, res) => {
    const profile = req.cookies.profile;
    if (profile)
    {
        res.send(profile);
    }
    else
    {
        res.send('No hay perfil');
    };
};

userController.saveProfile = (req, res) => {
    const profile = {
        lang: 'es',
        theme: 'dark'
    };
    res.cookie('profile', profile, {maxAge: 1000* 10});
    res.send({msg: 'User save profile', profile});
};

module.exports = userController;
