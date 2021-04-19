const mongoose = require("mongoose")

//import the models
const customerCoffee = mongoose.model("Coffee")
const customerSnack = mongoose.model("Snack")

//get all customer coffees
const getAllCustomerCoffee = async (req, res) => {
    try {
        const customerCoffees = await customerCoffee.find()
        return res.send(customerCoffees)
    }catch(err) {
        res.status(400)
        return res.send("Database query failed")
    }
}

//get all customer snacks
const getAllCustomerSnack = async (req, res) => {
    try {
        const customerSnacks = await customerSnack.find()
        return res.send(customerSnacks)
    }catch(err) {
        res.status(400)
        return res.send("Database query failed")
    }
}

//export
module.exports = {
    getAllCustomerCoffee,
    getAllCustomerSnack
}