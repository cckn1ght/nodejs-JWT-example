
//secret: used when we create and verify JSON Web Tokens
//database: the URI with username and password to your MongoDB installation

module.exports = {
  'database': process.env.MONGO_URL || 'mongodb://localhost:27017/JWT-example',
  'secret': 'Awesome-JWT'
};
