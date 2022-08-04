const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            // Default value is set to a new ObjectId
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: "Reaction ID required.",
            maxlength: 280
        },
        username: {
            type: String,
            required: "Username Required!"
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    }
)


const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: "Need to have a thought!",
        maxlength: 280,
        minlength: 1
    },
    createAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: "Username required!"
    },
    reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);


ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;