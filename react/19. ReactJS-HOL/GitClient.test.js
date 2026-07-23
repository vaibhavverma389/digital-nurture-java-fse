import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { name: 'repo-one' },
      { name: 'repo-two' }
    ];
    axios.get.mockResolvedValue({ data: dummyRepos });

    const client = new GitClient();
    const result = await client.getRepositories('techiesyed');

    expect(result).toEqual(['repo-one', 'repo-two']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
