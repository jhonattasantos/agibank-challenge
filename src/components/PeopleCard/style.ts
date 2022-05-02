import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 12px;

    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.08);

    display: flex;
    flex-direction: column;
    
    text-align: center;

    width: 100%;
    @media (min-width:600px) { 
        width: 290px;
    }

    @media (min-width:1025px) { 
        width: 295px;
    }

`

export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 8px 0;
    border-bottom: 1px solid #f2f2f2;
`

export const Button = styled.button`
    border: none;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
    background-color: var(--btn-primary);
    color: #fff;
    :hover{
        background-color: #F8AA2D;
    }
`