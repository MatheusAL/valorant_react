import styled from 'styled-components';


const Button = styled.button`
    color: grey;
    opacity: .5;
    border: 2px solid grey;
    background: var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 20px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: 1;
    }
`;


export default Button;