import Post from '../../../models/post';

export default async function handler(req: any, res: any) {
  const { id } = req.query;

  const post = await Post.findOne({ _id: id });
  if (!post) {
    res.status(200).json({ error: 'no post found with that id' });
    return;
  }

  res.status(200).json(post);
}
