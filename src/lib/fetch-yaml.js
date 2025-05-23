import YAML from 'yaml'

const repoURL = 'https://raw.githubusercontent.com/MLGTASTICa/Hullrot/refs/heads/master/';

export async function fetchYAML(filePath) {

  const fetchedYAML = await fetch(repoURL + filePath)
  .then((response) => {
    return response.text();
  })
  .then((result) => {
    return YAML.parse(result, { logLevel: 'error' });
  })
  .catch((err) => {
    console.log("fetchYAML failed! -", err);
  });

  return fetchedYAML;
}