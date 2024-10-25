
import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser } from '../api/userApi';

const UserList = ({ onUserUpdated }) => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers(currentPage);
      setUsers(data.results);
    };
    getUsers();
  }, [currentPage]);

  const handleDelete = async (id) => {
    await deleteUser(id);
    onUserUpdated();
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}>Prev</button>
      <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
    </div>
  );
};

export default UserList;
