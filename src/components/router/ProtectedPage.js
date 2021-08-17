import React from 'react';
import { Link } from 'react-router-dom';

const ProtectedPage = () => {
  return (
    <div>
      <h1>Welcome to Protected Page!</h1>
      <Link to='/'>Back To Home</Link>
    </div>
  );
};

export default ProtectedPage;
