import express from 'express';
import bodyParser from 'body-parser';
import Connection from './database/db.js'; // Ensure file extension is correct
import Router from './routes/route.js'; // Ensure file extension is correct
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use("/",Router);

if(process.env.NODE_ENV==='production'){
  app.use(express.static("client/build"));
}


app.listen(process.env.PORT, () => {
  console.log('Server is running on port 8000');
});
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL = process.env.MONGODB_URI|| `mongodb+srv://root:Micromax_a63@stockmarketproject.lzlgm.mongodb.net/?retryWrites=true&w=majority&appName=StockMarketProject`;
Connection(URL);



