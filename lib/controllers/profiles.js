const { Router } = require('express');
const ProfileService = require('../services/ProfileService');
const Profile = require('../models/Profile');

module.exports = Router().post('/', async (req, res) => {
  const profile = await ProfileService.create(req.body.name);
  res.send(profile);
});