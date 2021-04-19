//import mongo
require('dotenv').config()
const mongoose = require("mongoose")

//connect with database
CONNECTION_STRING = "mongodb+srv://Tacocola:<password>@tacocolavan.ejhn3.mongodb.net/Customer?retryWrites=true&w=majority"
MONGO_URL = CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD)

mongoose.connect(MONGO_URL || "mongodb://localhost", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "Customer"
})

const db = mongoose.connection

db.on("error", err => {
    console.error(err);
    process.exit(1)
})

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port)
})

//establish the moodels' modules
require("./modelModule")