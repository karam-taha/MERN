const { Author } = require('../models/author.model');
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json({Authors: allAuthors}))
        .catch(err => res.json({ message: 'Sth went wrong', error: err}));
}
module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(oneAuthor => res.json({ Author:oneAuthor}))
    .catch(err => res.status(400).json(err))
}
module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json({Author:newAuthor}))
        .catch(err => res.status(400).json(err))
}
module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators:true}
    )
        .then(updatedAuthor => res.json({Author: updatedAuthor}))
        .catch(err => res.status(400).json(err))
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id:req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.status(400).json(err))
}

