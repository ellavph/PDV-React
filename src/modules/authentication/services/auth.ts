// authApiService.ts
import axios from 'axios';

interface Credentials {
  email: string;
  password: string;
}

interface AuthResponse {
  success: boolean;
  data?: {
    token: string;
  };
}

export const authApiService = {
  login: async (credentials: Credentials): Promise<string | null> => {
    try {
      const response = await axios.post<AuthResponse>(process.env.REACT_APP_BACKEND_URL + 'user/login', credentials);

      if (response.data.success && response.data.data?.token) {
        const token = response.data.data.token;

        // Armazenar o token em localStorage ou sessionStorage
        localStorage.setItem('token', token);

        return token;
      } else {
        console.log(response.data)
        console.log('Falha no login. Verifique suas credenciais.');
        return null;
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
      return null;
    }
  },
};

export const isAuthenticated = () => {
  // Lógica para verificar se o token de autenticação está presente
  const token = localStorage.getItem('token'); // Supondo que o token esteja armazenado no localStorage
  return !!token; // Retorna true se o token existir, caso contrário, retorna false
};