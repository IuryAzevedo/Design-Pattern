// src/store/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../services/api';

// Definição da interface User que representa a estrutura de um usuário
interface User {
  id?: string; // O ID do usuário é opcional porque será gerado pelo backend
  nome: string; // Nome do usuário
  email: string; // Email do usuário
  password: string; // Senha do usuário
}

// Interface que representa o estado da store relacionado aos usuários
interface UserState {
  users: User[]; // Lista de usuários
}

// Estado inicial da store de usuários
const initialState: UserState = {
  users: [], // Inicialmente a lista de usuários está vazia
};

// Cria um slice do Redux para lidar com as ações e o estado dos usuários 
// (slice é uma maneira de organizar um conjunto de reducers, actions e estado relacionados em um único local. )
const userSlice = createSlice({
  name: 'user', // Nome do slice
  initialState, // Estado inicial
  reducers: {
    // Reducer para adicionar um usuário à lista de usuários
    addUser(state, action: PayloadAction<User>) {
      state.users.push(action.payload);
    },
  },
});

// Exporta a action `addUser` para ser utilizada em outros lugares do código
export const { addUser } = userSlice.actions;

// Exporta o reducer do slice para ser utilizado na configuração da store
export default userSlice.reducer;

// Action assíncrona para criar um novo usuário no backend e adicionar à lista de usuários
export const createUserAsync = (userData: Omit<User, 'id'>) => async (dispatch: (action: PayloadAction<User>) => void) => {
  try {
    // Faz a requisição para a API para criar o usuário
    const response = await api.post<User>('/createUser', userData);
    // Adiciona o usuário à lista de usuários no Redux
    dispatch(addUser(response.data));
  } catch (error) {
    console.error('Error creating user:', error);
  }
};
