const { User, Thought } = require('../models');

console.log(`Initianing User Controls...`);
  // /api/users
  // get all users

 //Ref:  req is mostly used for all.  {params} is used for something specific, {body} is used to change something.  On the update, we need to find all first and then we select a specific section.  So we have {body} to affect it as a whole while {params} is to get a specific user 

//The properties that we want to use .populate() on are properties that have a type of mongoose.Schema.Types.ObjectId
//On the ones that have this is the "thoughts".  If we think about it, if we find all Users, we aren't finding the thoughts.  However if we find one User, we need all their thoughts, so we'll need to populate it when we find their IDs

const UserController = {
    //Remember that these are from the user-routes.  If we call 'getAllUsers', it'll be using ".get(getAllUsers)"" from the command
    getAllUsers(req, res) {
        User.find({})
        //-__v is versionKey, first creatged by Mongoose.  Value contains the internal revision of the document.  It's default name
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
    },
    
    getUserById({params}, res){


        //Use the function to find one User
        User.findOne({ _id: params.id })
        //The user is going to have all their thoughts populated
        .populate({
            path: 'thoughts',
            select: '__v'
        })
        //This also targets all their friends
        .populate({
            path: 'friends',
            select: '__v'
        })
        //After populating the information from both friends and thoughts and also extracting one of the user IDs, this will then be transferred here
        .then(dbUserData => {
            //If there's no user with that data ID
            if (!dbUserData)
            {
                res.status(404).json({ message: 'There is no user with that ID!' });
                return;
            }
            //Else, do go to the json
            res.json(dbUserData);
        })
        //If an error happens, catch it
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
    
    createNewUser ({body}, res) {
        //Use the body to create the User
        User.create(body)
            //Then promise to move this to the json.  Also, catch the error
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.json(err));
    },

    updateUserById({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
      },
    removeUserById({params}, res){
        //We need to gather ALL the thoughts that the user has first
        Thought.deleteMany({ _id: params.id})
            //Then we find that data in the dbUserData.  If it's there, we'll do deleteMany
            .then(() => {
                User.findOneAndDelete({ _id: params.id })
                .then(dbUserData => {
                    if(!dbUserData)
                    {
                        res.status(404).json({message: 'Can not find the user with the ID!'});
                        return;
                    }
                    res.json(dbUserData);
                })
            })
            
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
            });
    },

    addFriend({ params }, res) {
        User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    },

    deleteFriend({ params }, res) {
        User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
        )
        .then((dbUserData) => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(400).json(err));
    }
}

console.log(`User-controllers is now loaded!`);

module.exports = UserController;