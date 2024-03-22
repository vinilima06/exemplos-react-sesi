// Importa o React e os hooks necessários do React
import React, {useState} from 'react';
// Importa o hook useForm do react-hook-form para lidar com formulários de maneira eficiente
// Obs: Para instalar (npm install react-hook-form)
import {useForm} from 'react-hook-form';
// Importa a imagem de fundo do login
import '../css/style.css';
// Importa a imagem de fundo do login
import minhaImagem from '../images/login.jpg';
// Importa a imagem de verificação
import verified from '../images/verified.png';

// Função principal que representa o componente de formulário
function MyForm() {
    // Destruturação do objeto retornado pelo hook useForm
    // formState é um objeto que contém o estado do formulário, e errors é uma propriedade desse objeto
    const { register, handleSubmit, formstate: { errors }} = useForm();
    // Estado local para controlar o estado do formulário
    const [status, setStatus] = useState ({submittedSuccessfully: false, loading: false, showPassword: false});

    // Função que é chamada quando o formulário é enviado
    const onSubmit = data => {
        // { ...status}: O operador de propagação (...) é utilizado para criar uma cópia do estado atual (status). Isso é feito para garantir que não estamos modificando diretamente o estado anterior, respeitando o princípio de umutabilidade no React.
        setStatus({...status, loading: true}) // Atualiza o estado para indicar que está carregando

        // Simula um tempo de espera antes de atualizar o estado para sucesso
        setTimeout (() => {
            setStatus({ submittedSucessfully: true, loading: false});
        }, 1000);
    };
}