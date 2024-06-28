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

exports.createPosts = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.status(201).json({
    message: 'Posts created successfully',
    posts: {
      id: new Date().toISOString(),
      name: name,
      email: email,
      password: password,
    },
  });
};
