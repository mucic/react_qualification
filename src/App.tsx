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
  const [filter, setFilter] = useState<string>('');

  // Component DID MOUNT
  useEffect(()=>{
    getRepos().then((data: GitData)=>{
      // console.log(data);
      setRepos(data);
    });
  },[]);

  return (
    <div className="App container">
      <section className="showcase">
        <section className="topic">
          <h2><a href="#">#</a>React Qualification</h2>
          <p>This is React qualification test mentored by Jonjoe!</p>
        </section>
        <section className="nes-container with-title">
          <h3 className="title">My Git Repos</h3>
          <div className="item">

            <div className="nes-field is-inline">
              <label htmlFor="inline_field">Filter:</label>
              <input type="text" id="inline_field" className="nes-input" placeholder="Search" onChange={e => setFilter(e.target.value)} value={filter} />
            </div>

            <ul className="nes-list is-circle">
              {repos
                .filter((repo: GitDataStruct) => repo.name.includes(filter))
                .map((repo: GitDataStruct) => (
                  <li key={repo.id}>
                    <a href={repo.html_url}>{repo.name}</a>
                  </li>
                ))}
            </ul>

          </div>


        </section>
      </section>
    </div>
  );
}

export default App;
