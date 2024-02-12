import React, { useState, useEffect  } from 'react';
import { useNavigate  } from 'react-router-dom';
import { LoaderAnimation, LoginAnimation } from '../../../assets/lottie/LottieAnimation';
import { authApiService } from '../services/auth';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/'); 
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {

      setLoading(true); // Ativa o loader

      const token = await authApiService.login({ email, password });
      if (token) {
        console.log('Login bem-sucedido! Token:', token);
        localStorage.setItem('token', token);
        navigate('/'); 
      } else {
        console.log('Falha no login. Verifique suas credenciais.');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
    } finally {
      setLoading(false); // Desativa o loader, independentemente do resultado
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {loading ? (
        // Mostra o loader se a autenticação estiver em andamento
        <LoaderAnimation />
      ) : (
        // Mostra o formulário de login quando não estiver carregando
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
          <h5 className="text-2xl font-bold mb-4 text-center">
            <span className="flex items-center justify-center">
              <LoginAnimation />
            </span>
          </h5>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuário
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              id="username"
              type="text"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-full"
              id="password"
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-slate-900 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center rounded-full"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;