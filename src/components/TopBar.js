import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import back from './../assets/images/back.png';

export default function TopBar({returnbtn}) {

    let navigate = useNavigate();

    return (
        <>
            <TopBarContainer>CINEFLEX</TopBarContainer>
            {returnbtn ? 
                <ReturnButton onClick={() => navigate(-1)}>
                    <img src={back} alt=''/>
                </ReturnButton>
            : ''}
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
    position: fixed;
    top: 10px;
    left: 5px;
    width: 47px;
    height: 47px;
    background-color: transparent;
    border: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        width: 47px;
        height: 47px;
    }
`;