const Fake = require("../models/jokes.model");

module.exports.findAllFakes = (req, res) => {
  Fake.find()
    .then(allDaFakes => res.json({ Fakes: allDaFakes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleFake = (req, res) => {
	Fake.findOne({ _id: req.params.id })
		.then(oneSingleFake => res.json({ Fake: oneSingleFake }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewFake = (req, res) => {
  Fake.create(req.body)
    .then(newlyCreatedFake => res.json({ Fake: newlyCreatedFake }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingFake = (req, res) => {
  Fake.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedFake => res.json({ Fake: updatedFake }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingFake = (req, res) => {
  Fake.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
