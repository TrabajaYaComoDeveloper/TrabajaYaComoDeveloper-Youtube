import {promises as fsPromises} from 'fs';

const TOTAL_REPOSITORIES = "%{{TOTAL_REPOSITORIES}}";

const readmeFile = async () => {
    const fileRead = await fsPromises.readFile('./README.md.tpl', { encoding: 'utf-8' });
    const fileReplaced = fileRead.replace(TOTAL_REPOSITORIES, '2');
    await fsPromises.writeFile('README.md', fileReplaced);
}
readmeFile();