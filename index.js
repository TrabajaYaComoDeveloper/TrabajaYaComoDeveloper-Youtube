import {promises as fsPromises} from 'fs';
import {fetchUserInfo} from './fetchGithubApi.js';

const TOTAL_REPOSITORIES = "%{{TOTAL_REPOSITORIES}}";

const readmeFile = async () => {
    const fileRead = await fsPromises.readFile('./README.md.tpl', { encoding: 'utf-8' });
    const totalRepositories = await fetchUserInfo();
    const fileReplaced = fileRead.replace(TOTAL_REPOSITORIES, totalRepositories);
    await fsPromises.writeFile('README.md', fileReplaced);
}
readmeFile();