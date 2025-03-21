import  express from 'express';
import  mongoose from 'mongoose';
import  dotenv from 'dotenv';
import path  = require ('path');
import router from './router';

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../views/'));
app.use(express.static(path.join(__dirname,'../public/')));


app.use('/',router);


//mongoose connection
mongoose.connect('mongodb://localhost:27017/User-Management-System-Ts',{  
}).then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log('MongoDB Connection error:',err));


//Start The Server
app.listen(PORT,()=>{
    console.log(`Server Running On http://localhost:${PORT}`) 
});