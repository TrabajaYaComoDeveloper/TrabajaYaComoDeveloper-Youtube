import { Octokit } from "octokit";

const octokit = new Octokit();

export const fetchUserInfo = async () => {
    const githubResponse = await octokit.rest.users.getByUsername({
        username: 'TrabajaYaComoDeveloper'
    });
    console.log(githubResponse);
    return githubResponse.data.public_repos;
}
fetchUserInfo();