const { Router } = require('express');
const { redirect } = require('express/lib/response');
const ProfileService = require('../services/ProfileService');
const Profile = require('../models/Profile');

module.exports = Router().post('/', async (req, res) => {
  const profile = await Profile.insert({ name: 'adria', quote: 'i like turtles'});

  res.json(profile);
});


