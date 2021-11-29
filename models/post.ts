import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  dateCreated: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.models.Post || mongoose.model('Post', postSchema);
