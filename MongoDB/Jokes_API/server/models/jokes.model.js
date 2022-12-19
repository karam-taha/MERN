const mongoose = require("mongoose");

const FakeSchema = new mongoose.Schema({
	name: String,
	age: Number
});

const Fake = mongoose.model("Fake", FakeSchema);

module.exports = Fake;