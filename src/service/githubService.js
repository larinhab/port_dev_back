const axios = require('axios');

async function fetchGitHubProjects() {
  const githubToken = process.env.GITHUB_TOKEN
  
  try {
    const username = 'larinhab';
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
        headers: {
          'Authorization': `token ${githubToken}`
        }
    });

    const projects = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
    }));

    return projects;
  } catch (error) {
    console.error('Erro ao fazer requisição para o GitHub:', error.message);
    throw new Error('Erro ao buscar projetos do GitHub');
  }
}

module.exports = { fetchGitHubProjects };