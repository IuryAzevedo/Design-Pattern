// src/components/CreateUserComponent.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/reducers/userReducer'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateUserComponent: React.FC = () => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    try {
      await dispatch(addUser({ nome, email, password }));
      toast.success('Usuário criado com sucesso!');
      setNome('');
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('Erro ao criar usuário.');
      console.error('Error creating user:', error);
    }
  };
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 5, paddingBottom: 5}}>
    <h1>Criar usuário</h1>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSubmit}>Criar Usuário</button>
    </div>
  );
};

export default CreateUserComponent;
