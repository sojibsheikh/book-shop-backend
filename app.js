const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors)
app.use(morgan('dev'));
app.use(express.static('public'))
app.use('/api/user',userRoutes)

const url = process.env.DB_URL;
mongoose.connect(url,{useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(()=>{
        console.log('Database is connected,Yeahooooo!!!');
    })
    .catch((err)=>{
        console.log(err.message);
    })


app.get('/',(req,res)=>{
    return res.status(200).json({
        status:true,
        "message":"Book Shop Rest"
    })
})

app.listen(port,()=>{
    console.log(`server running at the port : ${port}`)
})