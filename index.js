const express = require('express');
const cors = require('cors');
const app = express();
const PayURouter = require('./Routes/payURouter');


app.use(cors("*"));

app.use(express.json());

app.use('/payu',PayURouter);

app.listen(5000,()=>{
    console.log('app listening on port 5000');
})