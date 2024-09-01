import express from 'express';
import bodyParser from 'body-parser';
import {config} from 'dotenv'
import { UserRoute } from '@/routes/users.route';
config({path:'.env'})
const {PORT} = process.env
const app = express();
const port = PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = new UserRoute();
app.use("/",userRoute.router);

// Sync the database and start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
