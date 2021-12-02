import Post from '../../../models/post';

export default async function handler(req: any, res: any) {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'GET':
      const post = await Post.findOne({ _id: id });
      if (!post) {
        res.status(200).json({ error: 'no post found with that id' });
        return;
      }

      res.status(200).json(post);
      break;

    case 'DELETE':
      const postToDelete = await Post.findOne({ _id: id });
      if (!postToDelete) {
        res.status(400).json({ error: 'no post found with that id' });
        return;
      }

      const deletedPostResult = await Post.deleteOne({ _id: id });

      if (!deletedPostResult) {
        res.status(400).json({ error: 'Error deleting post' });
        return;
      }

      res.status(200).json(deletedPostResult);

      break;

    case 'PUT':
      const postToUpdate = await Post.findOne({ _id: id });
      if (!postToUpdate) {
        res.status(400).json({ error: 'no post found with that id' });
        return;
      }

      const updatedPostData = req.body;
      const updatedPost = {
        ...updatedPostData,
        dateCreated: postToUpdate.dateCreated,
        dateUpdated: new Date(),
      };
      const updatedPostResult = await Post.replaceOne({ _id: id }, updatedPost);

      if (!updatedPostResult) {
        res.status(400).json({ error: 'Error updating post' });
        return;
      }

      res.status(200).json(updatedPostResult);

      break;
    default:
      res.status(400).json('error');
      break;
  }
}
