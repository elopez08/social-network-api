const { User, Thought } = require('../models');

//The properties that we want to use .populate() on are properties that have a type of mongoose.Schema.Types.ObjectId

console.log(`Initiating Thought controls....`);

const ThoughtController = {

    getAllThoughts(req, res){
        //We're trying to find all the thoughts
        Thought.find({})
        .populate({
            path: 'reactions',
            select: '__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    getThoughtById({params}, res){
        Thought.findOne({ _id: params.id })
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbThoughtData => {
            if (!dbThoughtData) {
            res.status(404).json({ message: 'No thoughts found with that id!' });
            return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
      });
    },
    createNewThought({body}, res){
        Thought.create(body)
            .then(({ _id })=> {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                )
            })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thoughts found with that id!' });
                    return;
                    }
                    res.json(dbThoughtData);        
            })
    },
    updateThoughtById({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true} )
            .then(dbThoughtData => {
                if(!dbThoughtData)
                    {
                        res.status(404).json({message: 'Can not find the thought with the ID!'});
                        return;
                    }
                res.json(dbThoughtData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
            
    },
    removeThoughtById({params}, res){
        //There's only one Thought, so we'll find that one
        Thought.findOneAndDelete({ _id: params.id })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thoughts found with that id!' });
            return;
          }
          return User.findOneAndUpdate(
            { _id: parmas.userId },
            { $pull: { thoughts: params.Id } },
            { new: true }
          )
        })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No User found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
}

console.log(`The thought-controllers has now been loaded!`);

module.exports = ThoughtController;