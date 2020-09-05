import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 2px solid var(--primary);
    background-color: var(--prymary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 1;
    
    &:hover,
    &:focus {
    opacity: 0.6;
    }
`;

export default Button;
