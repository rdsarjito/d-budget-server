const jwt = require('jsonwebtoken');


const auth = async (req, res) => {
  try {
    const token = JSON.parse(req.headers.authorization.split(" ")[1]);
    const isCustomAuth = token.length < 500;

    let decodeData;

    if (isCustomAuth) {
      decodeData = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
      console.log(decodeData)      
    };

  } catch (error) {
    
  }
}

module.exports = auth;