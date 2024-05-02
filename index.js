import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('ready');
});

app.get('/', (req, res) => {
    res.send('api church-manager ready.')
});