import React, { useState, useEffect, GetDerivedStateFromError } from 'react';
import { runInThisContext } from 'vm';

// Expected data structure from Git API
interface GitDataStruct {
  id: number;
  node_id: string;
  name: string;
  html_url: string;
}
type GitData = GitDataStruct[];

// Fetch data from Git
async function getRepos() {
  const url = "https://api.github.com/users/mucic/repos?per_page=50";
  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };
  const response = await fetch(url, queryOptions);
  return response.json();
}

function App() {
  // Get/Set state for repos
  const [repos, setRepos] = useState<GitData>([]);
  // Get/Set state for user input
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    getRepos().then((data: GitData)=>{
      // console.log(data);
      setRepos(data);
    });
  },[]);

  return (
    <div className="App">
      <input type="text" onChange={ e => setFilter(e.target.value) } value={filter} />
      <ul>
        {repos
          .filter((repo: any) => repo.name.includes(filter))
          .map((repo: GitDataStruct)=>(
            <li key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
