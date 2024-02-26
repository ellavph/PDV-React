import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, AxiosRequestHeaders } from 'axios';
import { LoaderAnimation } from '../../assets/lottie/LottieAnimation';
import ReactDOM from 'react-dom';
import React from 'react';


// Função para mostrar o loader
const showLoader = () => {
    const loaderElement = document.getElementById('loader');
    if (loaderElement) {
        ReactDOM.render(React.createElement(LoaderAnimation), loaderElement);
    }
};

// Função para esconder o loader
const hideLoader = () => {
    const loaderElement = document.getElementById('loader');
    if (loaderElement) {
        ReactDOM.unmountComponentAtNode(loaderElement);
    }
};


// Criamos uma nova instância do Axios
const axiosInstance: AxiosInstance = axios.create();

// Definimos um tipo específico para as configurações da requisição
type InternalAxiosRequestConfig<T> = AxiosRequestConfig & { headers: AxiosRequestHeaders };

// Função para tratamento de erro genérico
const handleError = (error: AxiosError) => {
  // Aqui você pode adicionar lógica para lidar com diferentes tipos de erro
  console.error('Erro na requisição:', error);
  return Promise.reject(error);
};

// Adicionamos um interceptor de requisição
axiosInstance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> {
    // Exibir log da requisição
    showLoader();
    // Garantir que os cabeçalhos estejam definidos corretamente
    config.headers = config.headers || {};
    return config;
  },
  handleError
);

// Adicionamos um interceptor de resposta
axiosInstance.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    // Exibir log da resposta
    hideLoader();
    return response;
  },
  handleError
);

// Função para fazer uma requisição GET genérica
export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, config);
};

// Função para fazer uma requisição POST genérica
export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, data, config);
};

export default axiosInstance;


