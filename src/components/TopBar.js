import styled from 'styled-components';

export default function TopBar() {
    return (
        <Title>CINEFLEX</Title>
    );
}

const Title = styled.div`
    width: 100%;
    height: 67px;
    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 34px;
    color: #E8833A;
    text-align: center;
`;