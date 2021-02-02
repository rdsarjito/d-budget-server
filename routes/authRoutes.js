const { google } = require('googleapis');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const keys = require('../config/keys');
const User = mongoose.model('users');

module.exports = app => {
  app.post('/api/google-login', async (req, res) => {
    const { code } = req.body;
  
    const oauth2Client = new google.auth.OAuth2(
      keys.googleClientID,
      keys.googleClientSecret,
      req.headers.referer.replace(/\/$/, '')
    );

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      version: 'v2',
      auth: oauth2Client
    });

    const getData = await oauth2.userinfo.get();

    const existingUser = await User.findOne({ googleId: getData.data.id });
    if(existingUser) {
      const accesToken = jwt.sign({existingUser}, process.env.ACCES_TOKEN_SECRET);
      res.json({ accesToken });
    };
    const newUser = await new User({ googleId: getData.data.id, picture: getData.data.picture, nane: getData.data.name });

    const data = newUser.save();
    res.send(data)
  });
};