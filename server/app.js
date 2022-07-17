const express = require('express')
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
require('dotenv').config({path: `${__dirname}/.env`})
const adminAuth = require('./routes/adminAuth')
const course = require('./routes/course')
require('./db')
const cors = require('cors')
//use app
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use('/admin',adminAuth)
app.use('/course',course)
// app.use(express.static(path.join(__dirname,"assets")))

// app.set("view engine", "ejs");
// app.set('view engine', 'html');

// app.use('/',auth);

app.get("/app/welcome",async(req,res)=>{
    res.send("welcome");
})

//auth middleware
// app.use('/',authMiddleware);
// app.use('/',adminMiddleware)
// app.use('/product',product);
// app.use('/order',order)


app.all('*',(req,res)=>{
    res.send('404');
})

app.listen(port,()=>{
    console.log('Mubarak! Server chal raha hai');
}); 