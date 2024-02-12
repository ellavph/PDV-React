
import jwt_decode, { JwtPayload } from 'jwt-decode';

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


export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');

  if (!token) {
    return false; // Se o token não está presente, o usuário não está autenticado
  }

  try {
    // Decodifica o token JWT
    const decodedToken = JSON.parse(atob(token.split('.')[1])) as JwtPayload;
    
    // Verifica se a data de expiração do token está definida e se não está no passado
    if (decodedToken.exp !== undefined && decodedToken.exp * 1000 < Date.now()) {
      return false; // Token expirado
    }
    
    return true; // Token válido
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return false; // Retorna false se houver um erro ao decodificar o token
  }
};
