const { fetchGitHubProjects } = require('../service/githubService');

const getProjects = async (req, res) => {
  try {
    const username = 'larinhab'; 
    const projects = await fetchGitHubProjects(username);
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getProjects };