const express = require('express');
const session = require('express-session');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const authRoutes = require('./auth/routes');
const userRoutes = require('./user/routes');

const app = express();

app.use(morgan('dev'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 10
    }
}));

app.use(cookieParser())

app.get('/', (req, res) => {
    const body = `
        <h1>Hello World</h1>
        <a href="/auth/login">Login</a>
        <a href="/auth/me">Me</a>
        <a href="/auth/logout">Logout</a>
    `;
    res.send(body);
})

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Server running on port 3000');
});


