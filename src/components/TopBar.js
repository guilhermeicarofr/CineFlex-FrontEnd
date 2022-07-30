import styled from 'styled-components';

export default function TopBar() {
    return (
        <TopBarTitle>CINEFLEX</TopBarTitle>
    );
}

const TopBarTitle = styled.div`
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