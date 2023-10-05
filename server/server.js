const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const { CORS_ORIGIN } = process.env

app.use(cors({
    origin: CORS_ORIGIN
}));

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server Started on http://localhost:${PORT}`);
    console.log('Press CTRL + C to stop server');
});
