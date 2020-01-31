const express = require('express');
const path = require('path');

// const bodyParser = require('./body-parser');
// const cookieParser = require('./cookie-parser');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use((req, res, next) => {
    const err = new Error('Not Found - Status: 404');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
