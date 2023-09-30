const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors()); //cors origin
app.use(express.json()); 
const mongoose = require('mongoose');
// mongoose.set('strictQuery', false); 
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('ITP Backend API Running');
})

connectMongoDB().then(()=>console.log("MongoDB connection established!!")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://project1:project1@cluster0.jjwdcud.mongodb.net/?retryWrites=true&w=majority');
}

// app.use('/group', require('./route/group.route'));
app.use('/employee', require('./route/employee.route'));
app.use('/inventory', require('./route/inventory.route'));
app.use('/inventoryOrders', require('./route/inventoryOrders.route'));
app.use('/customer', require('./route/customer.route'));
app.use('/customerFeedback', require('./route/customerFeedback.route'));
app.use('/leave', require('./route/leave.route'));
app.use('/user', require('./route/user.route'));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})