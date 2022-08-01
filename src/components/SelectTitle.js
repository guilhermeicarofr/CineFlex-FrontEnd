import styled from 'styled-components';

export default function SelectTitle({children}) {
    return (
        <Title>
            {children}
        </Title>
    );
}

const Title = styled.h2`
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    position: fixed;
    top: 67px;
    background-color: #FFFFFF;
    z-index: 1;
`;