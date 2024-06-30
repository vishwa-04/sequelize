import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './src/models';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

export default app;
