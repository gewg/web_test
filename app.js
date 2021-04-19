const express = require('express')
const app = express();

require("./models")
//set up the router
const customerRouter = require("./routes/customerRouter")

/*handle the request*/
//the main page
app.get('/', (req, res) => {
    res.send('<h1>Taco Cola Ven System</h1>')
})

//handle the customers
//send the customer coffee
app.use("/customer-coffee", customerRouter.customerCoffeeRouter)
//send the customer snack
app.use("/customer-snack", customerRouter.customerSnackRouter)



app.listen(process.env.PORT || 3000, () => {
    console.log('Tacocola Backend Is Running')
})