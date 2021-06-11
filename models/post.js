const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type:String,
        require:true
    },
    content: {
        type:String,
        require:true
    }
});


const Post = new mongoose.model('Post', postSchema);
module.exports = Post;