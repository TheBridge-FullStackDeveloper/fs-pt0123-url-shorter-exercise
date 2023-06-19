import  { styled } from "styled-components";

const Body = styled.section`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
`

const Field = styled.section`
    margin: 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export default {
    Body,
    Form,
    Field,
}

/** 
   @media (max-width: 768px) {
        border: 1px solid black;
        border-radius: 10%

    }
 */