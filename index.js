import express from 'express';
import bodyParser from 'body-parser';       //this take in the imcomming post bodies
import userRoutes from './routes/users.js';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

//DB connect
const connection_url = 'mongodb+srv://nodejsexpressapi:nodejsexpressapi123@cluster0.tae6m.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true},
    ()=>console.log('Connected to DB...')
) 

//middlewares
app.use(bodyParser.json());

app.use('/users' , userRoutes);
//routes


//listener
app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`));