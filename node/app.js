import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hello With tag'));
app.listen(8000, () => console.log('Running on port 8000'));