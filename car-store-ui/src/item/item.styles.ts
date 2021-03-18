import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
width: 100%;
border: 1px solid lightblue;
border-radius: 20px;
height: 200px;
background-color: lightgrey;

button {
    border-radius: 0 0 px 20px;
    background-color: black;
    color: white;
}


div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    
}
`;