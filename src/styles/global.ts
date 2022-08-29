import { createGlobalStyle, keyframes } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: AssistantRegular
    }
    :root{

        --Green-1:rgb(216,245,226);
        
        --Grey-4:#121214;
        --Grey-3:#212529;
        --Grey-2:#343B41;
        --Grey-1:#868E96;
        --Grey-0:#F8F9FA;
        
        --textBtn:#FFFFFF; 
        
        

        --Sucess:#3FE864;
        --Negative:#E83F5B;

        --toastify-color-light: var(--Grey-0);
        --toastify-color-success: var(--Sucess);
        --toastify-color-error: var(--Negative);

    }
    body{
        background: white;       

        background-color: var(--Green-1);
    }

    h1 ,h2 ,h3, h4{

        font-weight: 700;
        color: #1d293f;
        text-shadow: 0.1px 0.1px 1px #1d293f;
    }

    button{

        cursor: pointer;
    }

    a{
        text-decoration:none
    }

    ::-webkit-scrollbar {
    width: 10px;
    }
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    }
    
    ::-webkit-scrollbar-thumb {
    background: rgb(32,141,69);
    }




`;

export const rotated = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }
`;
