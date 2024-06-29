exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        name: 'Elvis',
        profession: 'Software developer',
      },
    ],
  });
};
