const express = require("express")

//add routers
const customerCoffeeRouter = express.Router()
const customerSnackRouter = express.Router()

//require controller
const customerController = require("../controllers/customerController.js")

//handle the request
customerCoffeeRouter.get("/", customerController.getAllCustomerCoffee)
customerSnackRouter.get("/", customerController.getAllCustomerSnack)

//export
module.exports = {
    customerCoffeeRouter,
    customerSnackRouter
}





