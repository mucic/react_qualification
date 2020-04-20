import React, { useState, useEffect, GetDerivedStateFromError, ChangeEvent } from 'react';
import { runInThisContext } from 'vm';
import { IGitHubRepo } from "./models/IGitHubRepo";

const githubEndpointUrl = "https://api.github.com/users/mucic/repos?per_page=50";

// Fetch data from Git
async function getRepos() {
  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };
  const response = await fetch(githubEndpointUrl, queryOptions);
  return response.json();
}

function App() {
  // Get/Set state for repos
  const [repos, setRepos] = useState<IGitHubRepo[]>([]);
  // Get/Set state for user input
  const [filter, setFilter] = useState('');
  // Get/Set state for loader
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(()=>{
    getRepos().then((data: IGitHubRepo[])=>{
      // console.log(data);
      setRepos(data);
    });
  },[]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }
  return (
    <div className="app-container">
      <input type="text" onChange={ handleFilterChange } value={filter} />
      <div className="repo-container">
        <ul>
          {repos
            .filter((repo: IGitHubRepo) => repo.name.includes(filter))
            .map((repo: IGitHubRepo)=>(
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
