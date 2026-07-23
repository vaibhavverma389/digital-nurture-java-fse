import React, { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const client = new GitClient();
    client.getRepositories('techiesyed')
      .then(names => setRepos(names))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Repositories for techiesyed</h2>
      <ul>
        {repos.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
