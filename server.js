const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./app/models");

const app = express()

let corsOptions = {
    origin: "http://localhost:3001"
} 



app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app); 
require('./app/routes/reservation.routes')(app); 
require('./app/routes/billet.routes')(app); 
 

app.get("/", (req, res) => {
    res.json({message: "Hello World"})
})

app.get("/billets", (req, res) => {
    models.billet.findAll()
        .then((billet) => res.json(billet));
  });

db.sequelize.sync().then(() => {
    console.log('Drop and Resync Db')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})