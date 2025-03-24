import styled from "styled-components";


export const ContactItem = styled.li`
    display: flex;
    align-items: baseline;

    width: 100%;
    margin-bottom: 10px;
    padding: 6px;
    border: 1px solid black;
    border-radius: 4px;
`;


export const ContactName = styled.p`
    margin-right: 20px;

    font-size: 22px;
    font-weight: 600;
`;

export const ContactPhone = styled.p`
    font-size: 18px;
    font-weight: 500; 
`;


export const BtnDelete = styled.button`
    margin-left: auto;
    max-width: 72px;
    border: none;
    padding: 8px;
    align-self:  center;
  
    color: white;
    background-color: #2196F3;
    border-radius: 4px;
    cursor: pointer;
`;