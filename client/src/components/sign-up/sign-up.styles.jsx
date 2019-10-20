import styled from 'styled-components';

export const SignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width:800px){
        width: 100%;

        &:last-child{

        }
    }
`;

export const TitleContainer = styled.h2`
    margin: 10px 0;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
    @media screen and (max-width:800px){
        flex-direction: column;
        height: 110px;        
    }
`;