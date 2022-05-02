import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 18px;

    @media (min-width:1025px) { 
        flex-direction: row;
    }
`

export const PersonCard = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width:1025px) { 
        width: 30%;
    }
`

export const PersonDetails = styled.div`
    width: 100%;

    @media (min-width:1025px) { 
        & :first-child{
            margin-top: 0;
        } 
    }
`

export const BackButton = styled.div`
    display: none;
    border: none;
    padding: 10px;
    background-color: var(--btn-primary);
    text-align: center;
    width: 100%;
    border-radius:10px;
    a{
        padding: 10px;
        color: white;
        width: 100%;
    }
    @media (min-width:1025px) { 
        display: flex;
    }
`;
export const BackButtonMobile = styled.div`
    border: none;
    padding: 10px;
    background-color: var(--btn-primary);
    text-align: center;
    width: 100%;
    border-radius:10px;
    display: flex;
    a{
        padding: 10px;
        color: white;
        width: 100%;
    }

    @media (min-width:1025px) { 
        display: none;
    }
`