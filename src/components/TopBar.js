import styled from 'styled-components';

import back from './../assets/images/back.png''

export default function TopBar() {
    return (
        <>
            <TopBarContainer>CINEFLEX</TopBarContainer>
            <ReturnButton>
                <img src={back.png} alt=''/>
            </ReturnButton>
        </>
    );
}

const TopBarContainer = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    font-weight: 400;
    color: #E8833A;
    text-align: center;
    position: fixed;
    top: 0px;
`;

const ReturnButton = styled.button`

`;