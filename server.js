const app = require('./app');

const port = 3000;
app.listen('0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
});
