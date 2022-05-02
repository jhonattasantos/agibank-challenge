import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;

    @media (min-width:1025px) { 
        width: 1281px;
        margin: 0 auto;
    }
`