import React, { useEffect, useState } from 'react';

const URL = 'https://api.github.com/users/HelloKowshik';
const profile = {
  followers: null,
  public_repos: null,
};
const FetchData = () => {
  const [userData, setUserData] = useState(profile);
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUserData({
      followers: data.followers,
      public_repos: data.public_repos,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Github Data</h2>
      <h3>Followers: {userData.followers}</h3>
      <h3>Repos: {userData.public_repos}</h3>
    </div>
  );
};

export default FetchData;
