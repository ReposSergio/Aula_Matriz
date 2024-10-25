import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  const [refresh, setRefresh] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSuccess = () => {
    setRefresh(!refresh);
    setSelectedUser(null);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm user={selectedUser} onSuccess={handleSuccess} />
      <UserList onUserUpdated={handleSuccess} />
    </div>
  );
};

export default App;