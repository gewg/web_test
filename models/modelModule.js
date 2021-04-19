const mongoose = require("mongoose")

const customerCoffeeSchema = new mongoose.Schema({
    name : String,
    cost : Number,
    description : String,
    graph : String
})

const customerSnackSchema = new mongoose.Schema({
    name : String,
    cost : Number,
    description : String,
    graph : String
})

const customerCoffee = mongoose.model("Coffee", customerCoffeeSchema)
const customerSnack = mongoose.model("Snack", customerSnackSchema)

//export
module.exports = {
    customerCoffee,
    customerSnack
}