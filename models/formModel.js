var mongoose = require('mongoose');
var formSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Form Model
var form = module.exports = mongoose.model('form', formSchema);
module.exports.get = function (callback, limit) {
   form.find(callback).limit(limit); 
}
