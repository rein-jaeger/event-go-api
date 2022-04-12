import express from 'express';

const app = express();

//TODO: setup routes

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('Serve at http://localhost:3000/');
})