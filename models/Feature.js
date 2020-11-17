const mongoose = require("mongoose");
const { ObjectI} = mongoose.Schema;

const featureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
   imageUrl: {
       type: String,
       required: true
   },
   itemId: {
    type: Object,
    ref: 'Item'
}
   
})

module.exports = mongoose.model('Feature', featureSchema);