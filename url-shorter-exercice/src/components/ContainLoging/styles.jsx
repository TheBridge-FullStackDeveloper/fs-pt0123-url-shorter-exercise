import { styled } from "styled-components";

const ContainerLog = styled.div`

@media screen, (max-width: 667px) {

    body{

        display: flex;
        justify-content: center;
    
    }
    
    .contain-log{
    
        display         : flex;
        justify-content : center;
        padding         : 15px;
        background-color: #395E66;
        border-radius   : 15px;
        box-shadow      : 1px 1px 10px black;
        height          : 450px;
        width           : 320px;
    
        
    }

    .form-log{
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        text-align      : center;
        color           : white;
    }

    .input-text{
        border-radius : 15px;
        height        : 25px;
        width         : 220px;
        box-shadow    : 1px 1px 8px;
        margin-top    : 8px;
        text-align    : center;

    }

    p{
        margin-top    : -15px;
    }

    label{
        text-align: left;
    }

    .btn-log{
        box-shadow    : 1px 1px 5px black;
        border-radius : 15px;
        height        : 30px;
        margin-bottom : 30px;
    }

    a:link, a:visited, a:active {
        text-decoration  :none;
        color            : black;
    }
    
}

@media screen, (max-width : 1024px) {

    
    body{
        margin-top: 60px;
        display: flex;
        justify-content: center;
    
    }
    
    .contain-log{
    
        display         : flex;
        justify-content : center;
        padding         : 15px;
        background-color: #395E66;
        border-radius   : 15px;
        box-shadow      : 1px 1px 10px black;
        height          : 450px;
        width           : 320px;
    
        
    }

    .form-log{
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        text-align      : center;
        color           : white;
    }

    .input-text{
        border-radius : 15px;
        height        : 25px;
        width         : 220px;
        box-shadow    : 1px 1px 8px;
        margin-top    : 8px;
        text-align    : center;

    }

    p{
        margin-top    : -15px;
    }

    label{
        text-align: left;
    }

    .btn-log{
        box-shadow    : 1px 1px 5px black;
        border-radius : 15px;
        height        : 30px;
        margin-bottom : 30px;
    }


    .register-link:hover{
        color: white;
        text-shadow: 1px 1px 10px black;
    }

    a:link, a:visited, a:active {
        text-decoration  :none;
        color            : black;
    }
    
}

`

export default {
    ContainerLog,
}