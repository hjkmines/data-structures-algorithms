const mongoose = require('mongoose'); 

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true 
    }, 
    subscribedToChannel: {
        type: String, 
        required: true
    }, 
    subscribedDate: {
        type: Date, 
        required: true 
    }
})