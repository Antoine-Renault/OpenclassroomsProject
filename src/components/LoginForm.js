// src/components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Utilisateur connecté', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Mot de passe</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;
