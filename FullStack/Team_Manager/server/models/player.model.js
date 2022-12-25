const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { type: String,
        required: [true,"Name is required"],
        minlength: [2, "Name should be at least 2 characters!"]
    },
    position: {type: String},
    firstGame:{
        type:Number,
    },
    secondGame:{
        type:Number,
    },
    thirdGame:{
        type:Number,
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

