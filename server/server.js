import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './app/models/index.js';

const app = express();
const PORT = 8080;
const corsOption = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connex.sync();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});