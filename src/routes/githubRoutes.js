const express = require('express');
const router = express.Router();
const { getProjects } = require('../controller/githubController');

router.get('/projects', getProjects);

module.exports = router;
