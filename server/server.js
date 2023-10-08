
const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080;
const warehouseRoutes = ('./routes/warehouse-routes')


app.use(warehouseRoutes);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const { CORS_ORIGIN } = process.env

app.use(cors({
    origin: CORS_ORIGIN
}));


