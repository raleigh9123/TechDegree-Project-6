const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (!err.status) {
        err.status = 500;
        err.message = 'Internal Server Error';
    }
    console.log(err);
    res.render('error', {err});
});

const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
