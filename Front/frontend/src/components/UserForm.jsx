import React, { useState } from 'react';
import { createUser, updateUser } from '../api/userApi';

const UserForm = ({ user, onSuccess }) => {
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      await updateUser(user.id, formData);
    } else {
      await createUser(formData);
    }
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" />
      <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" />
      {!user && <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />}
      <button type="submit">Submit</button>
      <a href="/">Refresh</a>
    </form>
  );
};

export default UserForm;
