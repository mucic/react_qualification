import React, { useState, useEffect, GetDerivedStateFromError, ChangeEvent } from 'react';
import { runInThisContext } from 'vm';
import { IGitHubRepo } from "./models/IGitHubRepo";

import { Page, Input, Loader, List } from "./components";

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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(()=>{
    getRepos().then((data: IGitHubRepo[])=>{
      // console.log(data);
      setRepos(data);
      setLoading(false);
    });
  },[]);

  // const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setFilter(e.target.value);
  // }
  const filterRepos: any = repos.filter((repo: any) => repo.name.includes(filter));
  return (
    <Page>
      <Input onChange= {input => setFilter(input)} value={filter}/>
      { loading ? <Loader/> : <List data={filterRepos} /> }
    </Page>
  );
}

export default App;
