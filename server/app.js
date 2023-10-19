const express = require('express');
const { swaggerUi, specs } = require('./swagger')
const {sequelize} = require('./models')
const cors = require('cors')
const session = require('express-session')
const https = require('https')
const path = require('path')
const fs = require('fs')
const dotenv = require('dotenv')
const indexRouter = require('./routes/indexRouter')
const app = express();

dotenv.config()

const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs))
app.get('/', (req, res) =>{
  res.send("hello world")
} )
app.use('/api', indexRouter); // 기본주소: localhost:PORT/api

sequelize.sync({ force: false }).then(() => {
  // const sslServer = https.createServer({
  //   key : fs.readFileSync(path.join(__dirname, 'config', 'cert.key')),
  //   cert: fs.readFileSync(path.join(__dirname, 'config', 'cert.crt')),
  // }, app)
  // sslServer.listen(PORT, () => {
  //   console.log(`https://localhost:${PORT} listening`)
  // });
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} listening`);
  });
});
